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
        // concat: {
        //   options: {
        //     separator: ';',
        //     sourceMap: true
        //   },
        //   dist: {
        //     src: ['libs/*.js'],
        //     dest: 'libs/vendor.js',
        //   },
        // },


        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            globals: {
              jQuery: true
            },
          },
          uses_defaults: ['js/*.js'],
          with_overrides: {
            options: {
              curly: false,
              undef: true,
            },
            files: {
              src: ['js/*.js']
            },
          }
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
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /* Grunt tasks */
    grunt.registerTask('default', ['sass', 'cssmin', 'jshint']);
    grunt.registerTask('dev', ['watch']);

};