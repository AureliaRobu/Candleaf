module.exports = function(grunt) {
    'use strict';

    let helper = require('./_helpers'),
        themes = require('../configs/_themes');

    grunt.registerTask('img', 'Build Theme Images', function() {
        helper.executeTask(arguments, 'img', grunt);
    });

    grunt.registerTask('imgDev', 'Build Theme Images for Development', ()=>{
        for(let theme in themes) {
            let currentTheme = themes[theme];

            if(currentTheme.grunt) {
                grunt.task.run('concurrent:' + theme + 'MinifyImages');
            }
        }
    });
};
