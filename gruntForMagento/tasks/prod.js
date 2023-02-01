module.exports = function(grunt) {
    'use strict';

    let helper = require('./_helpers');

    grunt.registerTask('prod', 'Prepare Theme for Deployment', function() {
            helper.executeTask(arguments, 'prod', grunt);
            grunt.task.run('watch');
    });

    grunt.registerTask('production', 'Prepare Theme for Deployment', function() {
            helper.executeTask(arguments, 'prod', grunt);
            grunt.task.run('watch');
    });
};
