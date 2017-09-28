//The "wrapper" function
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/** RvB
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {

			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/styles.css' :'assets/scss/styles.scss'
				}
			}
		},

		/** RvB
		* Grunt Contrib Watch
		* Monitor files and execute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {
  			
  			sass: {

  				files: [
  					'assets/scss/*.scss'
  				],
  				tasks: [
  					'sass'
  				]
  			},

  			scripts: {

  				files: [
  					'assets/js/*.js'
  				],
  				tasks: [
  					'uglify'
  				]
  			}
  		},

  		/** RvB
		* Grunt Contrib Uglify
		* Minify Javascript files
		* https://www.npmjs.com/package/grunt-uglify
		*/

		uglify: {
			my_target:{
				files: {
					'js/scripts.js' : ['assets/js/scripts.js']
				}
			}
		}

	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['watch']);

};