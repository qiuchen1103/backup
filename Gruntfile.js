module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    
    uglify: {
      compressjs: {
        files: {
          'js/basement.min.js': ['js/basement.js'],
          'js/main.min.js' : ['js/main.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/basement.js', 'js/main.js'],
        tasks: ['uglify']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'index.html',
              'css/FAQ.css',
              'js/basement.js', 
              'js/main.js'
          ]
      }
    },
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  
  grunt.registerTask('watchit',['uglify','connect','watch']);
  grunt.registerTask('default');


};