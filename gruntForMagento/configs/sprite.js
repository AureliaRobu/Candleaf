'use strict';

const path = require('path'),
      combo = require('./_combo'),
      themes = require('./_themes');

let   themeOptions = {},
      pngSpriteOptions;

for(const name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name] = {
            src: combo.autoPathSpriteSrc(name) + '**/*.png',
            dest: combo.autoPathImageSrc(name) + 'spritesheet.png',
            destCss: combo.autoPathThemeCss(name) + '/gruntForMagento/_png-sprite.less',
            imgPath: '../images/spritesheet.png',
            cssTemplate: path.join(__dirname, '../assets/tmpl/_png-sprite-mixins.less')
        };
    }
}

pngSpriteOptions = {
    options: {

    }
};

module.exports = Object.assign(themeOptions, pngSpriteOptions);
