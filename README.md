<p float="left">
  <img src="https://www.logolynx.com/images/logolynx/27/2747a30cc3e84b077d9ffebb1bee917c.jpeg" width="400" height="234" />
  <img src="https://1000logos.net/wp-content/uploads/2020/04/UBS-logo.jpg" width="400" height="234"/>
</p>

# UBS Neo Mobile Foundation Project

**NOTE:** This project is built using Webdriver V7 where the tests are written with `async`/`await` and TypeScript.

This project can run:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps

## Based on

This boilerplate is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

* Open a terminal
* Copy the following command into the terminal, (you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/garyb-bs/ubs-wdio-foundation.git.
```
* Move into the directory that you just cloned by typing
```sh
cd ubs-wdio-foundation
```
* When inside this directory, copy the following command and run it:
```sh
npm install
```
* Once all the dependencies are installed, you will be able to run the tests by using the following commands:
```sh
# Run on Android devices
npm run fx-android-online

# Run on iOS devices
npm run fx-ios-online
```

There are other scripts for the offline tests and the Research app. See the "scripts" section of the [package.json](./package.json) file for the full list and simply run:

```sh
npm run <insert script name>
```

## Configuration files

This foundation project uses a specific config for iOS and Android and the app you want to run, see the [configs](./config) folder for the full list.

Since we are running on BrowserStack, we do not need any local instance of Appium installed, we just specify the latest version in our BS capabilities using the `appiumVersion` capability. A local install of Appium can be useful for accurate debugging and finding the right locators.

## Environment Variables

You can export the environment variables for the Username and Access Key of your BrowserStack account

```sh
export BROWSERSTACK_USERNAME=<browserstack-username> &&
export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
```

This will allow the config files to pick up the correct credentials when running the tests.

For more information on how to set up environment variables see this link: https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html

## Page Objects

This project utilises the Page Object Model to reduce the amount of duplicated code across the project. See this link for documentation on the Page Object Model in WebDriverIO.

Basically if we are performing the same action more than once, it is best practice to turn that logic into a page object. So in the case of this project, things like [Login](./tests/pageobjects/Login.ts), [Search For Address](./tests/pageobjects/Search.ts), [Notifications testing](./tests/pageobjects/Notifications.ts), [Order Details](./tests/pageobjects/Orders.ts); will all be happening more than once so have been turned into Page Objects.

Each page object class file has a number of methods to perform the logic as well as "get" methods that will return the selector for that property. For example "getSearchSelector" will return the selector value for a Search bar that we can then enter text into.

## Specs

The specs (or test) files are where the logical flow of the tests will be stored. At the moment, they are separated into 2 buckets for [Android](./tests/specs/android) and [iOS](./tests/specs/ios). This is because in some cases, the selectors can be different between App versions. If the App was designed with a uniform design and the selectors are not different then we can streamline the code even more by just having one set of test files and running those on both sets of devices.

The spec files will import the Page Objects that are needed for that specific test. For example, if our spec file is testing the Order Details, then we will need to import the [Orders](./tests/pageobjects/Orders.ts) object.

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

### BrowserStack

This project is setup for testing your app with BrowserStack.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

## Parallel Testing

This project is set up to run the tests in parallel on multiple devices. So if you kick off 5 files, and your configuration contains 5 devices, then 25 tests will be kicked off in total. We define the Android devices in our capabilities in the [Android Config for FX App](./config/fx-app/android) and [Android Config for Research App](./config/research-app/android).And we define the iOS devices in our [iOS Config for FX App](./config/research-app/ios) and [iOS Config for Research App](./config/research-app/ios) for the different devices.

Here is an example of the Android device capabilities configured in the Android config.

```js
  capabilities: [{
    "appium:deviceName": 'Samsung Galaxy S22 Ultra',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S22',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S10',
    "appium:os_version": "9.0"
  }, {
    "appium:deviceName": 'Huawei P30',
    "appium:os_version": "9.0"
  }, {
    "appium:os_version" : "10.0",
    "appium:device" : "Samsung Galaxy Note 20",
  }],
  ```

 And here are the iOS capabilities:

 ```js
  capabilities: [{
    "appium:deviceName": 'iPhone XS',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 13 Pro Max',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 11',
    "appium:os_version": "13"
  }],
  ```

These devices were selected based on the App Dynamics data provided earlier. We recommend looking at your App Dynamics data regularly and seeing what the breakdown is for your app and configuring/changing the capabilities based on the highest usage by your user base.

## Notes

Feel free to pull down the repo and play around and get to grips with how it all works. Breaking it is sometimes the best way to learn! Any questions, please reach out to me at any time.
