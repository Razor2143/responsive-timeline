module.exports = function(grunt) {
   
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       
        uglify: {
            my_target: {
                files: {
                    'output/js/script.js': ['libs/js/custom/*.js']
                } //files
            } //my_target
        }, //uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass
        watch: {
            scripts: { 
                files: ['libs/js/**/*.js', 'libs/js/*.js'],
                tasks: ['uglify']
            }, //scripts
            sass: {
                files: ['libs/scss/**/*.scss', 'libs/scss/*.scss'],
                tasks: ['compass:dev']
            } //sass
        } //watch
    }); //initConfig
    grunt.registerTask('default', 'watch');
}; //exports