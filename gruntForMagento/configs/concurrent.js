'use strict';

let themes = require('./_themes'),
    themeOptions = {};

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name + 'MinifyImages'] = [
            'imagemin:' + name + 'Raster',
            'imagemin:' + name + 'Svg'
        ];

        themeOptions[name + 'Compile'] = [
            'css:' + name,
            'js:' + name,
            'concurrent:' + name + 'MinifyImages'
        ];

        themeOptions[name + 'Sprite'] = [
            'svg_sprite:' + name,
            'sprite:' + name
        ];

        themeOptions[name + 'Production'] = [
            'cssProd:' + name,
            'jsProd:' + name
        ];
    }
}

themeOptions['Compile'] = [
    'css',
    'js',
    'imgDev'
];

module.exports = themeOptions;
