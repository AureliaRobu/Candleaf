module.exports = function(grunt) {
    'use strict';

    let path = require('path'),
        helper = require('./_helpers');

    grunt.registerTask('compile', 'Build Theme for Development', function() {
        helper.executeTask(arguments, 'compile', grunt);
    });
};
