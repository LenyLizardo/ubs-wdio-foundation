var defaults = require("./wdio-bstack.conf.js");
var browserstack = require("browserstack-local");
var _ = require("lodash");

let timeStamp = new Date().getTime();
let localIdentifier = `localIdentifier_${timeStamp}`;

var localParallelOverrides = {
  specs: ["./test/specs/local/local.spec.js"],

  capabilities: [
    {
      maxInstances: 1,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      platformName: "Android",
      "browserstack.local": true,
      "browserstack.localIdentifier": localIdentifier,
      autoGrantPermissions: true,
    },
    {
      maxInstances: 1,
      device: "iPhone 12 Pro",
      os_version: "14",
      app: process.env.BROWSERSTACK_IOS_APP_ID,
      platformName: "iOS",
      automationName: "XCUITest",
      "browserstack.local": true,
      "browserstack.localIdentifier": localIdentifier,
      gpsEnabled: "true",
    },
  ],
  onPrepare: (config: any, capabilities: any) => {
    console.log("Connecting local");
    return new Promise<void>((resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start(
        {
          key: process.env.BROWSERSTACK_ACCESSKEY,
          localIdentifier: localIdentifier,
        },
        (error: any) => {
          if (error) return reject(error);
          console.log("Connected. Now testing...");
          resolve();
        }
      );
    });
  },
  onComplete: function (capabilties: any, specs: any) {
    console.log("Closing local tunnel");
    return new Promise<void>((resolve, reject) => {
      exports.bs_local.stop((error: any) => {
        if (error) return reject(error);
        console.log("Stopped BrowserStackLocal");
        resolve();
      });
    });
  },
};

const localTempConfig = _.defaultsDeep(localParallelOverrides, defaults.config);

localTempConfig.capabilities.forEach((caps: { [x: string]: any; }) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = localTempConfig;
