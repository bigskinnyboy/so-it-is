var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefix = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		minifyCSS = require('gulp-minify-css'),
		jshint = require('gulp-jshint'),
		uglify = require('gulp-uglify'),
		stylish = require('jshint-stylish');

var paths = {
	scripts: [
		'js/plugins/*.js',
		'js/_*.js'
	],
	jshint: [
		'gulpfile.js',
		'js/*.js',
		'!js/scripts.js',
		'!js/scripts.min.js',
		'!**/*.min-*'
	],
	sass: [
		'sass/styles.scss',
		'sass/**/*.scss',
		'sass/styles-old-ie.scss'
	]
};

var destination = {
	css: 'css',
	scripts: 'js',
	vendor: 'js/vendor'
};

gulp.task('sass', function() {
	return gulp.src(paths.sass)
			.pipe(sass()).on('error', function(err) {
				console.warn(err.message);
			})
			.pipe(autoprefix('last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12'))
			.pipe(gulp.dest(destination.css))
			.pipe(minifyCSS({noAdvanced: true}))
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest(destination.css));
});

gulp.task('jshint', function() {
	return gulp.src(paths.jshint)
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
});

gulp.task('js', ['jshint'], function() {
	return gulp.src(paths.scripts)
			.pipe(concat('./scripts.js'))
			.pipe(gulp.dest(destination.scripts))
			.pipe(uglify())
			.pipe(rename('./scripts.min.js'))
			.pipe(gulp.dest(destination.scripts))
});


gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['jshint', 'js']);
});

gulp.task('default', ['sass', 'jshint', 'js']);
gulp.task('dev', ['default']);
gulp.task('build', ['sass', 'jshint', 'js']);

