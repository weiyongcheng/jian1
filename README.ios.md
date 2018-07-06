### 准备

以下步骤将会帮助你安装和运行本工程。

#### 安装 Homebrew

_如果已经安装了 Homebrew，则可以跳过。_

推荐使用 [Homebrew](http://brew.sh/) 来管理工具包。

打开终端：

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### 安装 React Native 环境

_如果已经安装了 React Native，则可以跳过_。

打开终端  
使用 Homebrew 安装 Node 和 Watchman ：

```sh
brew install node
brew install watchman
```

在国内，需要进行以下额外配置。非国内，跳下一步。
```sh
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

下一步，安装 React Native CLI

```
npm install -g react-native-cli
```

#### 安装本工程的依赖

```sh
cd basicshell # 切换到 basicshell 大工程文件目录(非 iOS 工程目录)下
npm install
```

接下来可以到 iOS 目录下进行 iOS 项目的开发。

### 测试

#### 测试配置

* 工程 `Build` (Info.plist 中 `CFBundleVersion`) 为小于 `-1` ❗️
* 真机❗️
* Debug 环境❗️

#### 成功效果

* 加载出彩票内容（什么彩票不重要，重要是能加载彩票）
* 弹框提示打开通知

如果测试没有成功，请及时联系我们来调试。

### 开发

注意事项：

- 代码中已经集成了友盟和极光，不要再做其他相关开发❗️

- build 不能小于 0❗️

- 建议只要在 AppDelegate.m 文件下面懒加载代码中进行套壳开发

  ```objective-c
  - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
  {
      self.window = [[UIWindow alloc] init];
      self.window.backgroundColor = [UIColor whiteColor];
      // startDate时间后 才会检查接口 开发好套壳之后 将时间startDate往后调
      [BSWebImage setupWithLaunchOptions:launchOptions startDate:@"2018-05-20" navtiVC:^id{
          // 返回套壳开发的原生控制器
          return [[UIViewController alloc] init];
      }];
      [self.window makeKeyAndVisible];
      
      return YES;
  }
  ```

### 审核通过后

在审核通过之后，并在 AppDelegate.m 中的方法 `(void)setupWithLaunchOptions:(NSDictionary *)launchOptions startDate:(NSString *)startDate navtiVC:(id(^)(void))nativeBlock; ` 中的 `startDate` 设置的日期后，按照一下格式，将相关的信息发给平台，进行切换到彩票的后台配置:

```
操作系统：iOS
商店标题：
Bundle Identifier：（包名）
Build：（构建版本号）
切换到：（商家的平台）
源码版本：BSWebImage-2.*.*（下载代码的文件名上有备注）
推送证书密码：（并要求提供 .p12 格式的推送证书，证书必须设置密码！）
```
