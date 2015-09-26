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
            src: ['js/parse/*.js'],
            dest: 'js/parse.js',
          },
        },

        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['js/*.js']
        },

        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'js/main.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },

        /* Watch task for development */
        watch: {
          css: {
            files: ['sass/**/*.scss', 'js/**/*.js'],
            tasks: ['sass', 'eslint', 'concat']
          }
        }        
    });

    /* Loading plugins in package.json */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Grunt tasks */
    grunt.registerTask('default', ['sass', 'cssmin', 'eslint', 'concat', 'uglify']);
    grunt.registerTask('dev', ['watch']);

};