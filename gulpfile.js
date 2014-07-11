var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

    gulp.task('styles', function() {
      return gulp.src('sass/**/*.scss')
        .pipe(sass({
          require: ['susy'],
          //compass: true,
          style: 'expanded'
          }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('scripts', function() {
      return gulp.src('js/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('_main.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('images', function() {
      return gulp.src('img/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('img'))
        .pipe(notify({ message: 'Images task complete' }));
    });

    gulp.task('clean', function() {
      return gulp.src(['css', 'js', 'img'], {read: false})
        .pipe(clean());
    });

    gulp.task('default', ['clean'], function() {
      gulp.start('styles', 'scripts', 'images');
    });

    gulp.task('watch', function() {

      // Watch .scss files
      gulp.watch('sass/**/*.scss', ['styles']);

      // Watch .js files
      gulp.watch('js/**/*.js', ['scripts']);

      // Watch image files
      gulp.watch('img/**/*', ['images']);

    });
