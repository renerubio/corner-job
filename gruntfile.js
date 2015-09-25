module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* SASS task to generate style.css */
        sass: {
          dist: {
            files: {
              'css/main.css' : 'sass/main.scss'
            }
          }
        },

        /* Minifies style.css */
        cssmin: {
          options: {
            sourceMap: true,
            target: 'css'
          },
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['main.css'],
              dest: 'css',
              ext: '.css'
            }]
          }
        },

        /* main.js generation */
        concat: {
          options: {
            separator: ';',
            sourceMap: true
          },
          dist: {
            src: ['parse/*.js'],
            dest: 'js/parse.js',
          },
        },

        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['js/*.js']
        },

        /* Watch task for development */
        watch: {
          css: {
            files: ['src/sass/**/*.scss', 'src/js/**/*.js', 'src/content/**/*'],
            tasks: ['sass', 'concat']
          }
        }        
    });

    /* Loading plugins in package.json */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');

    /* Grunt tasks */
    grunt.registerTask('default', ['sass', 'cssmin', 'eslint']);
    grunt.registerTask('dev', ['watch']);

};