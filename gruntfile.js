module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            files: {
              'css/main.css' : 'sass/main.scss'
            }
          }
        },

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

        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['js/**/*.js']
        },

        concat: {
          options: {
            separator: ';',
            sourceMap: true
          },
          dist: {
            src: ['js/parse/*.js'],
            dest: 'dist/js/parse.js',
          }
        },

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/js/react.js': 'js/react/*.js'
                }
            }
        },

        uglify: {
          dist: {
            files: {
              'dist/js/parse.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },

        /* Watch task for development */
        watch: {
          css: {
            files: ['sass/**/*.scss', 'js/**/*.js'],
            tasks: ['sass', 'cssmin', 'eslint', 'concat']
          }
        }        
    });

    /* Loading plugins in package.json */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Grunt tasks */
    grunt.registerTask('default', ['sass', 'cssmin', 'eslint', 'concat', 'uglify', 'babel']);
    grunt.registerTask('dev', ['watch']);

};