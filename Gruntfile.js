'use strict';
module.exports = function (grunt) {

	grunt.initConfig({
		compass: {
			dist: {
				options: {
					require: 'susy',
					sassDir: 'sass',
					cssDir: 'css',
					environment: 'production',
					outputStyle: 'compressed'
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
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
		watch : {
			sass: {
				files: [
					'sass/*.scss',
					'sass/partials/*.scss',
					'sass/modules/*.scss'
				],
				tasks: ['compass', 'cssmin']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Register tasks
	grunt.registerTask('default', [
		'watch'
	]);
};