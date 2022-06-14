import { config } from '../../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/android/test2.ts',
    './tests/specs/android/test6.ts',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    './tests/specs/android/test1.js',
    './tests/specs/android/test3.js',
    './tests/specs/android/test4.js',
    './tests/specs/android/test5.js',
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
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        "appium:app": process.env.BROWSERSTACK_ANDROID_APP_ID || 'bs://7556cbbcae1b8633df6d181499586b8b7fa4bb4d',
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "platformName": "android",

        // Set your BrowserStack config
        "bstack:options": { 
            debug: true,
            networkProfile: 'airplane-mode',

            // Set other BrowserStack capabilities
            projectName: 'ubs-app-foundation-test',
            buildName: 'android',
            sessionName: 'fx-app-tests-test',
            appiumVersion : "1.22.0",
            realMobile: true
        }
    },
];

exports.config = config;
