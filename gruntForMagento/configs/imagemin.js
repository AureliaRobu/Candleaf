'use strict';

const   combo = require('./_combo'),
        themes = require('./_themes'),
        svgo = require('imagemin-svgo');

let     themeOptions = {},
        imageminOptions = {};

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {
        themeOptions[name + 'Raster'] = {
            files: [{
                expand: true,
                cwd: combo.autoPathImageSrc(name),
                src: ['**/*.{png,jpg,gif,jpeg}'],
                dest: combo.autoPathImages(name)
            }]
        };

        themeOptions[name + 'Svg'] = {
            files: [{
                expand: true,
                cwd: combo.autoPathImageSrc(name),
                src: ['**/*.svg'],
                dest: combo.autoPathImages(name)
            }],
            options: {
                use: [svgo()]
            },
        };
    }
}

imageminOptions = {
    png: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            src: ['**/*.png'],
            ext: '.png'
        }]
    },
    jpg: {
        options: {
            progressive: true
        },
        files: [{
            expand: true,
            src: ['**/*.jpg'],
            ext: '.jpg'
        }]
    },
    gif: {
        files: [{
            expand: true,
            src: ['**/*.gif'],
            ext: '.gif'
        }]
    },
    svg: {
        options: {
            use: [svgo()]
        },
        files: [{
            expand: true,
            src: ['**/*.svg'],
            ext: '.svg'
        }]
    }
};

module.exports = Object.assign(themeOptions, imageminOptions);
