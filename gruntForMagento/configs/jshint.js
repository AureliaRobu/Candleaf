'use strict';

const combo = require('./_combo'),
      themes = require('./_themes');

let themeOptions = {},
    jshintOptions = {
        options: {
            jshintrc: combo.rootPath() + 'gruntForMagento/.jshintrc'
        }
    };

for(let name in themes) {
    if(themes[name].grunt) {
        themeOptions[name] = {
            files: {
                src: combo.jsThemeSourceFiles(name)
            }
        };
    }
}

themeOptions['appCode'] = {
    files: {
        src: combo.jsAppCodeSourceFiles()
    }
};

module.exports = Object.assign(jshintOptions, themeOptions);
