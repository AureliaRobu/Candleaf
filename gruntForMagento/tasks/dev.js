module.exports = function(grunt) {
    'use strict';

    let helper = require('./_helpers');

    grunt.registerTask('dev', 'Prepare Theme for Development and File Watching', function() {
            helper.executeTask(arguments, 'dev', grunt);
            grunt.task.run('watch');
    });
};
