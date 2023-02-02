'use strict';

let combo = require('./_combo'),
    themes = require('./_themes'),
    apOptions = require('./_autoprefixer'),
    themeOptions = {},
    babelOptions = {
        options: {
            presets: [
                [
                    combo.getNodeModulesDir() + '/babel-preset-env',
                    {
                        target: {
                            browsers: apOptions.dev.browsers
                        },
                        debug: false,
                        modules: false
                    }
                ]
            ],
            minified: true,
        }
    };

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name] = {
            options: {
                sourceMap: false,
                sourceType: 'script',
                compact: false,
                minified: false
            },
            files: 'app/design/frontend/Candleaf/main_theme/**/js/**/source/**/*.js'
        };
    }
}

themeOptions['appCode'] = {
    options: {
        sourceMap: false,
        sourceType: 'script',
        compact: false,
        minified: false
    },
    files: 'app/code/Candleaf/**/view/frontend/web/js/**/source/**/*.js'
};

module.exports = Object.assign(babelOptions, themeOptions);
