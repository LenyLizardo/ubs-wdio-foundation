const allureReport = require('@wdio/allure-reporter').default;
const allureCommand = require('allure-commandline');

exports.config = {
  specs: [],

  logLevel: "warn",

  coloredLogs: true,

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 240000,

  connectionRetryCount: 3,

  framework: "mocha",
  reporters: [["allure", { 
    outputDir: "allure-results",
    disableWebdriverScreenshotsReporting: false,
    addConsoleLogs: true,
  }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 240000,
  },

  onBrowserstack: true,
  
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  
  commonCapabilities: {
    "browserstack.debug": true,
    name : require("minimist")(process.argv.slice(2))["bstack-session-name"] || "default_name",
    build: process.env.BROWSERSTACK_BUILD_NAME || "browserstack-examples-appium-webdriverio" + " - " + new Date().getTime(),
    project: "browserstack-examples-appium-webdriverio", 
    app: process.env.BROWSERSTACK_ANDROID_APP_ID,
    maxInstances: 10,  
  },

  services: ["browserstack"],

  beforeSuite: function (suite: { title: any; name: string; }) {
    allureReport.addFeature(suite.title);
    allureReport.addDescription("generating Allure reports " + suite.name);
  },

  afterTest: async function (
    test: { title: string; },
    context: any,
    { error, result, duration, passed, retries }: any
  ) {

    if (require("minimist")(process.argv.slice(2))["bstack-session-name"]) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionName", "arguments": {"name":"' +
          require("minimist")(process.argv.slice(2))["bstack-session-name"] +
          '" }}',
        []
      );
    } else {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionName", "arguments": {"name":"' +
          test.title +
          '" }}',
        []
      );
    }

    if (passed) {
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}',
        []
      );
    } else {
      const reason = error
        .toString()
        .replace(/[^a-zA-Z0-9.]/g, " ")
        .substring(0, 255);

      await browser.takeScreenshot();
      await driver.takeScreenshot();
      await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "' +
          reason +
          '"}}',
        []
      );
    }
  },

  /**
   * Once the test is completed, perform any necessary cleanup actions.
   * @param {*} exitCode 
   * @param {*} config 
   * @param {*} capabilities 
   * @param {*} results 
   */
     onComplete: function(exitCode: any, config: any, capabilities: any, results: any) {
      console.log('----------------------------------------------')
      console.log('Test is complete')
      console.log('----------------------------------------------')
  
      const reportError = new Error('Could not generate Allure report')
      const generation = allureCommand(['generate', 'allure-results', '--clean'])
      return new Promise<void>((resolve, reject) => {
          const generationTimeout = setTimeout(
              () => reject(reportError),
              5000)
  
          generation.on('exit', function(exitCode: number) {
              clearTimeout(generationTimeout)
  
              if (exitCode !== 0) {
                  return reject(reportError)
              }
  
              console.log('Allure report successfully generated');
              resolve()
          })
      }) 
    },
};
