'use strict';

const   combo = require('./_combo'),
        themes = require('./_themes');

let     themeOptions = {},
        cleanOptions = {};

for(let name in themes) {
    let theme = themes[name];

    themeOptions[name] = {
        force: true,
        files: [{
            force: true,
            dot: true,
            src: combo.cleanPaths(name)
        }]
    };
}

cleanOptions = {
    "var": {
        "force": true,
        "files": [
            {
                "force": true,
                "dot": true,
                "src": [
                    "<%= settings.tmp %>/cache/**/*",
                    "<%= settings.tmp %>/generation/**/*",
                    "<%= settings.tmp %>/log/**/*",
                    "<%= settings.tmp %>/maps/**/*",
                    "<%= settings.tmp %>/page_cache/**/*",
                    "<%= settings.tmp %>/tmp/**/*",
                    "<%= settings.tmp %>/view/**/*",
                    "<%= settings.tmp %>/view_preprocessed/**/*",
                    "<%= settings.deployedVersion %>"
                ]
            }
        ]
    },
    "pub": {
        "force": true,
        "files": [
            {
                "force": true,
                "dot": true,
                "src": [
                    "<%= path.pub %>frontend/**/*",
                    "<%= path.pub %>adminhtml/**/*",
                    "<%= settings.deployedVersion %>"
                ]
            }
        ]
    },
    "styles": {
        "force": true,
        "files": [
            {
                "force": true,
                "dot": true,
                "src": [
                    "<%= settings.tmp %>/view_preprocessed/**/*",
                    "<%= settings.tmp %>/cache/**/*",
                    "<%= path.pub %>frontend/**/*.less",
                    "<%= path.pub %>frontend/**/*.css",
                    "<%= path.pub %>adminhtml/**/*.less",
                    "<%= path.pub %>adminhtml/**/*.css",
                    "<%= settings.deployedVersion %>"
                ]
            }
        ]
    },
    "markup": {
        "force": true,
        "files": [
            {
                "force": true,
                "dot": true,
                "src": [
                    "<%= settings.tmp %>/cache/**/*",
                    "<%= settings.tmp %>/generation/**/*",
                    "<%= settings.tmp %>/view_preprocessed/html/**/*",
                    "<%= settings.tmp %>/page_cache/**/*"
                ]
            }
        ]
    },
    "js": {
        "force": true,
        "files": [
            {
                "force": true,
                "dot": true,
                "src": [
                    "<%= settings.pub %>**/*.js",
                    "<%= settings.pub %>**/*.html",
                    "<%= settings.pub %>_requirejs/**/*",
                    "<%= settings.deployedVersion %>"
                ]
            }
        ]
    }
};

module.exports = Object.assign(themeOptions, cleanOptions);
