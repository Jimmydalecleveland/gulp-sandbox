var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');
var slim = require('gulp-slim');

gulp.task('default', ['views', 'stylus']);

gulp.task('views', function() {
  return gulp
    .src('./app/views/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./app'));
});

gulp.task('slim', function() {
  return gulp
    .src('./app/views/*.slim')
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass', function() {
  return gulp
    .src('./app/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/scss/styles.scss', ['sass']);
});

gulp.task('stylus', function() {
  return gulp
    .src('./app/stylus/styles.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/css'));
});

gulp.task('stylus:watch', function() {
  gulp.watch('./app/stylus/*', ['stylus']);
});
