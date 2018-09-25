module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        stylelint: {     
            options:{
                'indentation': 1,
            },
            all: ['css/*.css']
        },
        uglify: {
            js: {
                files: {
                    'js/main.min.js': ['js/main.js', 'js/main2.js'],
                },
            },
        },
        eslint: {
            options: {
                configFile: 'eslint.json'
            },
            target: ['js/main.min.js']
        },
        sass: {
            dist: {                            // Target
                files: {                         // Dictionary of files
                  'css/style.css': 'css/style.scss',       // 'destination': 'source'
                }
              }
        }
    });  
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-eslint');
  
    grunt.registerTask('default', ['uglify', 'stylelint', 'eslint', 'sass']);
  };
  
 