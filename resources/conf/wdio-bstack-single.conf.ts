var defaults = require("./wdio.conf.ts");
var _ = require("lodash");

var singleOverrides = {
  specs: ["./tests/specs/utils/doSearch.ts"],

  capabilities: [
    {
      maxInstances: 1,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: "UBS_Neo_App",
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ]
};

const tmpConfig = _.defaultsDeep(singleOverrides, defaults.config);

tmpConfig.capabilities.forEach((caps: { [x: string]: any; }) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
