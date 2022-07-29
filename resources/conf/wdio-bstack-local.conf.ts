var defaults = require("./wdio-bstack.conf.js");
var browserstack = require("browserstack-local");
var _ = require("lodash");

let localTimeStamp = new Date().getTime();
let localSingleIdentifier = `localIdentifier_${localTimeStamp}`;

var localOverrides = {
  specs: ["./test/specs/local/local.spec.js"],

  capabilities: [
    {
      maxInstances: 1,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      autoGrantPermissions: true,
      platformName: "Android",
      "browserstack.local": true,
      "browserstack.localIdentifier": localSingleIdentifier,
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

const tempConfig = _.defaultsDeep(localOverrides, defaults.config);

tempConfig.capabilities.forEach((caps: { [x: string]: any; }) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
