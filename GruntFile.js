module.exports = function(grunt) {
    'use strict';

    // configuração do projeto
    var gruntConfig = {

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            target: {
                files: {
                    'dist/angularform.min.js': 'src/angularform.js',
                }
            }
        }

    };

    grunt.initConfig(gruntConfig);

    // plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // tarefas
    grunt.registerTask('default', ['uglify']);
};