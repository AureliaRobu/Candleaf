'use strict';

const themes = require('./_themes');

let   themeOptions = {},
      jscsOptions = {};

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {

    }
}

jscsOptions = {
    file: {
        options: {
            config: 'dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc'
        },
        src: ''
    },
    test: {
        options: {
            config: 'dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc',
            reporterOutput: 'dev/tests/static/jscs-error-report.xml',
            reporter: 'junit'
        },
        src: ''
    }
};

module.exports = Object.assign(themeOptions, jscsOptions);
