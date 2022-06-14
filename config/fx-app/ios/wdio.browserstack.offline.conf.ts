import { config } from '../../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/fx-app/ios/*.ts',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    './tests/specs/fx-app/ios/test2.js'
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        "appium:app": process.env.BROWSERSTACK_IOS_APP_ID || 'bs://7556cbbcae1b8633df6d181499586b8b7fa4bb4d',
        "appium:deviceName": "iPhone 13 Pro Max",
        "platformName": "ios",
        "platformVersion": "15",

        // Set your BrowserStack config
        "bstack:options": { 
            debug: true,
            networkProfile: 'airplane-mode',

            // Set other BrowserStack capabilities
            projectName: 'ubs-app-foundation-test',
            buildName: 'ios',
            sessionName: 'fx-app-tests-test',
            appiumVersion : "1.22.0",
            realMobile: true
        }
    },
];

exports.config = config;
