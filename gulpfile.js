const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: { baseDir: './src' }
  });
});

gulp.task('reload', function() {
  return gulp.src('./src/**/*.(css|js)')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/**/*.(css|js)', ['reload']);
  gulp.watch('src/**/*.html', browserSync.reload);
});
