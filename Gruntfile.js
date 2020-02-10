module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        css: {
          src: 'css/main.css',
          dest: 'css/main.min.css'
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('default', ['cssmin']);
  
  };