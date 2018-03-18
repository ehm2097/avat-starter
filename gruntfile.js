module.exports = function (grunt) {

    var jsfiles = ['*.js', '!*.test.js'];

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    { src: ['src/index.html'], dest: 'dest/index.html' },
                    { expand: true, cwd: "src/js", src: jsfiles, dest: 'dest/js/'},
                    { src: 'node_modules/angular/angular.js', dest: 'dest/js/angular.js'},
                    { expand: true, cwd: "node_modules/angular-mocks", src: 'angular-mocks.js', dest: 'dest/js/'}
                ]
            }
        },
        connect: {
            server: {
              options: {
                port: 8888,
                base: "dest",
                open: true,
                keepalive: true
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['copy']);}