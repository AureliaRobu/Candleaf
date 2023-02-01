'use strict';

const   combo = require('./_combo'),
        themes = require('./_themes'),
        settings = require('./_settings');

let     themeOptions = {},
        lessOptions = {};

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name] = {
            files: combo.lessFiles(name)
        };

        themeOptions[name + 'Prod'] = {
            options: {
                sourceMap: false,
                strictImports: false,
                sourceMapRootpath: '/',
                dumpLinkNumbers: false,
                ieCompat: false
            },
            files: combo.lessFiles(name)
        };
    }
}

lessOptions = {
    options: {
        sourceMap: true,
        outputSourceFiles: true,
        compress: true,
        strictImports: false,
        sourceMapRootpath: '/',
        dumpLinkNumbers: false,
        ieCompat: false
    },
    setup: {
        files: combo.getLessPaths(settings.css.setup, '/setup.css', settings.less.setup, '/_setup.less')
    },
    updater: {
        files: combo.getLessPaths(settings.css.updater, '/updater.css', settings.less.updater, '/_setup.less')
    },
    documentation: {
        files: combo.getLessPaths(settings.doc, '/doc.css', settings.doc, '/source/docs.less')
    }
};

module.exports = Object.assign(themeOptions, lessOptions);
