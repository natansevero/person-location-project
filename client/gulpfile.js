const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('default', () => {
  gulp.start('server');
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
});
