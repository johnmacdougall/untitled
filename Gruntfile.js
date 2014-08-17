/* jshint node: true */

module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , jshint: {
            all: [
                "Gruntfile.js"
                , "src/**/*.js"
            ]
            , options: {
                jshintrc: '.jshintrc'
            }
        }
//        , jasmine: {
//            src: "lib/**/*.js"
//            , options: {
//                specs: "spec/**/*.js"
//                , vendor: "vendor/**/*.js"
//                , version: '2.0.0'
//            }
//        }
    })

    grunt.loadNpmTasks('grunt-contrib-jshint')
//    grunt.loadNpmTasks('grunt-contrib-jasmine')



    grunt.registerTask('test', ['jshint'])

};