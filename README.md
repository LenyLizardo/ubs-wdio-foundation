# UBS Mobile Foundation Project

**NOTE:** This project is built using Webdriver V7 where the tests are written with `async`/`await` and TypeScript.

This project can run:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps
- Android Chrome and iOS Safari browser ([check here](./README.md#automating-chrome-or-safari))

> This boilerplate uses the WebdriverIO native demo app which can be found [here](https://github.com/webdriverio/native-demo-app).
> **Note:**
> This boilerplate only handles local execution on 1 em/simulator at a time, not parallel execution. For more info about that Google on setting up a grid with Appium.

## Based on

This boilerplate is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `git clone https://github.com/garyb-bs/ubs-wdio-foundation.git`
1. Running `npm install`
1. Running tests `npm run fx-android-online` or `npm run fx-ios-online` (there are others, see scripts section of package.json for full list)

## Configuration files

This foundation project uses a specific config for iOS and Android and for each of the 2 apps, see [configs](./config). The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).
This shared config holds **all the defaults** so the iOS and Android configs only need to hold the capabilities and specs that are needed
for running on iOS and or Android (app or browser).

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.

Since we are running on BrowserStack, we do not need any local instance of Appium installed, we just specify the latest version in our BS capabilities.

## Locator strategy for native apps

The locator strategy for this project is to use `accessibilityID`'s, see also the
[WebdriverIO docs](https://webdriver.io/docs/selectors#accessibility-id) or this newsletter on
[AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used, and for example only XPATH is available, then the following setup could be used to make cross-platform
selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

## Native App Tests

All tests can be executed on the devices as configured in the capabilities laid out in the relevant iOS and Android config files . Please check the below tests on what they do or on how to run them separately.

```sh
# For Android local execution
npm run fx-android-online

# For iOS local execution
npm run fx-ios-online
```

### BrowserStack

This project is setup for testing your apps with BrowserStack.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

```sh
# For iOS
$ npm run fx-android-online

# For Android
$ npm run fx-ios-online
```
