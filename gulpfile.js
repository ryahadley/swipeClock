"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');  //Runs a local dev server
var open = require('gulp-open');  //open a URL in a web browser
var sass = require('gulp-sass'); //compile sass into css
var browserify = require('browserify'); //bundles JSX
var babelify = require('babelify'); //Transform React JSX to JS and es6 to es5
var source = require('vinyl-source-stream'); //use conventional test streams with gulp
var concat = require('gulp-concat'); //concats files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
  port: 4000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/styles/images/*',
    scss: [
      'src/styles/scss/main.scss'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

//Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.scss).pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.scss, ['css']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
