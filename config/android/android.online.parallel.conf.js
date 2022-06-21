const Login = require('../../tests/pageobjects/Login');

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  appUser: process.env.APP_USERNAME || '',
  appPassword: process.env.APP_PASSWORD || '',
  appPin: process.env.APP_PIN || '',

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

        // Set other BrowserStack capabilities
        projectName: 'ubs-app-foundation-test',
        buildName: 'ubs-android-tests',
        sessionName: 'fx-app-tests-test',
        appiumVersion : "1.22.0",
        realMobile: true
    }
  },

  //
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

  before: function () {
    var login = require('../../tests/pageobjects/Login');
    login.loginAsOnline();
  },

  /**
   * Perform any logic that is needed before a test is run.
   * @param {*} test 
   * @param {*} context 
   */
  beforeTest: function (test, context) {
    console.log('----------------------------------------------')
    console.log('Starting the test');
    console.log('----------------------------------------------')
  },
   
  /**
   * Once the test is completed, perform any necessary cleanup actions.
   * @param {*} exitCode 
   * @param {*} config 
   * @param {*} capabilities 
   * @param {*} results 
   */
  onComplete: function (exitCode, config, capabilities, results) {
    console.log('----------------------------------------------')
    console.log('Test is complete')
    console.log('----------------------------------------------')
  }
};

// Code to support common capabilities - wil merge common capabilities with device capabilities into an array that will run in parallel
exports.config.capabilities.forEach(function (caps) {
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
