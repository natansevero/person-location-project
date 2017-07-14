const gulp = require('gulp'),
      clean = require('gulp-clean'),
      uglify = require('gulp-uglify'),
      usemin = require('gulp-usemin'),
      cssmin = require('gulp-cssmin'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync')

gulp.task('default', ['copy'], () => {
  gulp.start('usemin');
});

gulp.task('copy', ['clean'], () => {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('usemin', () => {
  gulp.src('dist/**/*.html')
    .pipe(usemin({
      'js': [uglify],
      'css': [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch('src/**/*').on('change', browserSync.reload);
});
