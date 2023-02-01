module.exports = function(grunt) {
    'use strict';

    let helper = require('./_helpers');

    grunt.registerTask('css', 'Build Theme CSS', function() {
        helper.executeTask(arguments, 'css', grunt);
    });

    grunt.registerTask('cssProd', 'Build Theme CSS for Production', function() {
        helper.executeTask(arguments, 'cssProd', grunt);
    });
};
