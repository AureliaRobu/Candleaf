module.exports = function(grunt) {
    'use strict';

    let helper = require('./_helpers');

    grunt.registerTask('js', 'Build Theme Javascript', function() {
        helper.executeTask(arguments, 'js', grunt);
    });
};
