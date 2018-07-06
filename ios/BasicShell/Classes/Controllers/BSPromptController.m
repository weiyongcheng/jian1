//
//  PromptViewController.m
//  hatsune
//
//  Created by Mike on 10/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "BSPromptController.h"
#import "AppConfigurationModule.h"

@interface BSPromptController ()
@property (weak, nonatomic) IBOutlet UIActivityIndicatorView *activityIndicatorView;
@property (weak, nonatomic) IBOutlet UIButton *actionButton;
@property (weak, nonatomic) IBOutlet UILabel *promptLabel;

@end

@implementation BSPromptController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    self.actionButton.hidden = YES;
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)exitAction:(id)sender {
    exit(0);
}

- (void)changeToFailedMode {
    [self.activityIndicatorView stopAnimating];
    [self.actionButton setTitle:@"退出应用" forState:UIControlStateNormal];
    self.actionButton.hidden = YES;
    self.promptLabel.hidden = NO;
    [UIView animateWithDuration:0.25 animations:^{
        self.promptLabel.text = KDStr(@"网络似乎出现了问题。", @"\nThere seems to be a prob", @"lem with the netw", @"ork.\n:(\n\n可能需要重", @"新打开应用");
        self.actionButton.hidden = NO;
    }];
}

- (void)changeToLoadingMode {
    [self.activityIndicatorView startAnimating];
    self.promptLabel.hidden = NO;
    [UIView animateWithDuration:0.25 animations:^{
        self.promptLabel.text = @"正在加载数据，请稍等\n:)";
        self.actionButton.hidden = YES;
    }];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
