var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  onBrowserstack: true,
  
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  
  commonCapabilities: {
    "browserstack.debug": true,
    name : require("minimist")(process.argv.slice(2))["bstack-session-name"] || "default_name",
    build: process.env.BROWSERSTACK_BUILD_NAME || "browserstack-examples-appium-webdriverio" + " - " + new Date().getTime(),
    project: "browserstack-examples-appium-webdriverio", 
    app: process.env.BROWSERSTACK_ANDROID_APP_ID,
    maxInstances: 1,  
  },

  services: ["browserstack"],

  /**
   * Perform any logic that is needed before a test is run.
   * @param {*} test 
   * @param {*} context 
   */
   beforeTest: function (test: any, context: any) {
    console.log('----------------------------------------------')
    console.log('Starting the test');
    console.log('----------------------------------------------')
  
    allureReport.addEnvironment("Browser", "Chrome");
    allureReport.addEnvironment("Browser Version", "LATEST");
    allureReport.addEnvironment("Mobile Platform", browser.config.commonCapabilities["platformName"]);
    allureReport.addEnvironment("App ID", browser.config.commonCapabilities["app"]);
    allureReport.addDescription("This is the description");
    allureReport.addTestId("TC-001" + test.title);
    allureReport.addLabel("Test Label" + "The Test Label");
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
  
              console.log('Allure report successfully generated')
              resolve()
          })
      }) 
    }
};

exports.config = _.defaultsDeep(overrides, defaults.config);
