var defaults = require("./wdio.conf.ts");
var _ = require("lodash");

var parallelOverrides = {
  specs: [
    "./tests/specs/utils/doSearch.ts"
  ],

  exclude: [
    
  ], 

  capabilities: [
    {
      deviceName: "Samsung Galaxy A51",
      os_version: "10.0",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      deviceName: "Samsung Galaxy S20",
      os_version: "10.0",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      deviceName: "Samsung Galaxy S22",
      os_version: "12.0",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      deviceName: "Samsung Galaxy S22 Ultra",
      os_version: "12.0",
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ],

//   /**
//    * Perform any logic that is needed before a test is run.
//    * @param {*} test 
//    * @param {*} context 
//    */
//    beforeTest: function (test: any, context: any) {
//     console.log('----------------------------------------------')
//     console.log('Starting the test');
//     console.log('----------------------------------------------')


//     allure.add
//     allure.addEnvironment("Browser", "Chrome");
//     allure.addEnvironment("Browser Version", "LATEST");
//     allure.addEnvironment("Mobile Platform", browser.config.commonCapabilities["platformName"];
//     allure.addEnvironment("App ID", browser.config.commonCapabilities["appium:app"]);
//     allure.addTestId("TC-001" + test.title);
//     allure.addLabel("Test Label" + "The Test Label");
//   },
};

const parallelTempConfig = _.defaultsDeep(parallelOverrides, defaults.config);

parallelTempConfig.capabilities.forEach((caps: { [x: string]: any; }) => {
  for (const i in parallelTempConfig.commonCapabilities)
    caps[i] = caps[i] || parallelTempConfig.commonCapabilities[i];
});

exports.config = parallelTempConfig;
