module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-nodemon');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            dev: {
                script: 'proj.js'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['nodemon']);
};
