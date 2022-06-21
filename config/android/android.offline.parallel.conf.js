exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/utils/doSearch.ts'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    "appium:app": process.env.BROWSERSTACK_ANDROID_APP_ID || 'UBS_Neo_App',
    "platformName": "android",

    // Set your BrowserStack config
    "bstack:options": { 
        debug: true,
        networkProfile: 'airplane-mode',

        // Set other BrowserStack capabilities
        projectName: 'ubs-app-foundation-test',
        buildName: 'ubs-android-tests',
        sessionName: 'fx-app-tests-test',
        appiumVersion : "1.22.0",
        realMobile: true
    }
  },

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
    "appium:deviceName": 'P30',
    "appium:os_version": "9.0"
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  },

  beforeTest: function (test, context) {
    console.log('starting the test');
  },
  afterTest: function(test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
        browser.takeScreenshot();
    }
    tests++;
    console.log('----------------------------------------------')
    console.log(`No of tests: ${tests}`)
    console.log(`error is:\n${error}`)
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
