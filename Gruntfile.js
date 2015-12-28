module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    
    uglify: {
      compressjs: {
        files: {
          'js/main.min.js' : ['workPlace/main.js']
        }
      }
    },
    cssmin: {
        compress: {
          files: {
            "css/FAQ.min.css": ["workPlace/FAQ.css"]
          }
        }
      },

    // 复制任务
    copy: {
       main: {
          files: [
            // {src: ['path/*'], dest: 'dest/', filter: 'isFile'}, // 复制path目录下的所有文件
            {src: ['css/**','js/**','img/**','*.html'], dest: 'FAQ/'} // 复制path目录下的所有目录和文件
          ]
        }
    },

    watch: {
      scripts: {
        files: ['workPlace/FAQ.css', 'workPlace/main.js'],
        tasks: ['cssmin', 'uglify', 'copy']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'index.html',
              'workPlace/FAQ.css',
              'workPlace/main.js'
          ]
      }
    },
    connect: {
      options: {
          port: 7000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 7001,
          base: './'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  
  grunt.registerTask('watchit',['uglify','cssmin','copy','connect','watch']);
  grunt.registerTask('default');


};