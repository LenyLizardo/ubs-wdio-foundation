exports.config = {
  // Your BrowserStack username and access key. We use environment variables to make sure that the code is common for all users.
  // For more information on Environment variables see https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html
  // An example of setting the below variables is in the README.md file.
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  appUser: process.env.APP_USERNAME || '',
  appPassword: process.env.APP_PASSWORD || '',
  appPin: process.env.APP_PIN || '',

  updateJob: false,
  // The tests that you want to run will be specified here
  specs: [
    './tests/specs/fx-app/ios/*.ts'
  ],
  exclude: [
    './tests/specs/fx-app/ios/test2.ts'
  ],

  maxInstances: 10,
  // The common capabilities that will be used on all devices specified
  commonCapabilities: {
    "appium:app": process.env.BROWSERSTACK_IOS_APP_ID || 'UBS_Neo_App_iOS',
    "platformName": "ios",

    // Set your BrowserStack config
    "bstack:options": { 
        // Set other BrowserStack capabilities
        projectName: 'ubs-app-foundation-test',
        buildName: 'ubs-ios-tests',
        sessionName: 'fx-app-tests-test',
        appiumVersion : "1.22.0",
        debug: true,
        realMobile: true
    }
  },

  // Device capabilities for parallel runs
  capabilities: [{
    "appium:deviceName": 'iPhone 12',
    "appium:os_version": "14.0"
  }, {
    "appium:deviceName": 'iPhone 13',
    "appium:os_version": "15.0"
  }, {
    "appium:deviceName": 'iPhone XR',
    "appium:os_version": "15.0"
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
     * Runs after each test and will be used primarily to mark tests as Passed or Failed on the BrowserStack dashboard.
     * @param {*} test 
     * @param {*} context 
     * @param {*} param2 
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
      if(passed) {
        browser.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "All tests have passed"}}');
      } else {
        browser.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least one of the tests did not pass"}}');
      }
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

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
