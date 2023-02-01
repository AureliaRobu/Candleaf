'use strict';

const path = require('path'),
      combo = require('./_combo'),
      themes = require('./_themes');

let   themeOptions = {},
      svgspriteOptions = {};

for(const name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name] = {
            expand: true,
            cwd: combo.autoPathSpriteSrc(name),
            src: '**/*.svg',
            dest: combo.autoPathImageSrc(name),
            options: {
                svg: {
                    xmlDeclaration: true,
                    doctypeDeclaration: true,
                    namespaceIDs: true,
                    namespaceClassnames: true,
                    dimensionAttributes: true,
                    precision: 4
                },
                shape: {
                    dest: '../src/intermediate-svg',
                    spacing: {
                        padding: 5,
                        box: "padding"
                    }
                },
                mode: {
                    view: {
                        dest: '../css/',
                        prefix: '.svg-view-',
                        bust: false,
                        sprite: '../src/sprites.view.svg',
                        mixin: 'svg-view',
                        common: 'svg-view',
                        layout: 'vertical',
                        render: {
                            less: {
                                dest: '../css/source/gruntForMagento/_sprites-view.less',
                                template: path.join(__dirname, '../assets/tmpl/_sprite-mixins.less')
                            }
                        }
                    }
                }
            }
        };
    }
}

var svgSpriteOptions = {
    options: {

    }
};

module.exports = Object.assign(themeOptions, svgSpriteOptions);
