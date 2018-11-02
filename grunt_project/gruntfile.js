module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/js1.js', 'js/js2.js'],
        dest: 'build/js/script.js',
      },
      css: {
        src: ['css/css1.css', 'css/css2.css'],
        dest: 'build/css/style.js',
      }
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dev',['concat', 'watch']);
}
