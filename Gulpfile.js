var gulp = require('gulp');
var ts = require('gulp-typescript');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: ['./build'],

    port: 3001,
    livereload: true
  });
});

gulp.task('copy', function() {
  return gulp.src(['./src/**/**.*', '!./src/**/**.ts'], {
      base: './src'
    })
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('typescript', function() {
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      target: 'ES5',
      emitDecoratorMetadata: true,
      module: 'commonjs'
    }))
    .js
    .pipe(gulp.dest('./build/js/'))
  ;
});

gulp.task('default', ['copy', 'typescript', 'connect'], function() {
  gulp.watch('./src/**/*.ts', ['typescript']);
  gulp.watch(['./src/**/**.*', '!./src/**/**.js'], ['copy']);
});
