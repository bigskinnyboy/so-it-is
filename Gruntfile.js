'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded',
					includePaths: [
						'/Users/aaronwitherow/.rvm/gems/ruby-2.1.1/gems/susy-2.1.1/sass'
					]
					//require: 'susy'
				},
				files: {
					'css/styles.css' : 'sass/styles.scss'
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments:0
			},
			combine: {
				files: {
					'css/main.min.css': [
						'css/font-awesome.min.css',
						'css/styles.css'
					]
				}
			}
		},
		watch: {
			sass: {
				files: [
					'sass/*.scss',
					'sass/partials/*.scss',
					'sass/modules/*.scss'
				],
				tasks: ['sass', 'cssmin']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Register tasks
	grunt.registerTask('default', [
		'watch'
	]);
};
