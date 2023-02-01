'use strict';

let     themeOptions = {},
        eslintOptions = {};

eslintOptions = {
    files: {
        options: {
            configFile: 'dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc',
            reset: true,
            useEslintrc: false
        },
        src: ''
    },
    test: {
        options: {
            configFile: 'dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc',
            reset: true,
            outputFile: 'dev/tests/static/eslint-error-report.xml',
            format: 'junit',
            quiet: true
        },
        src: ''
    }
};

module.exports = Object.assign(themeOptions, eslintOptions);
