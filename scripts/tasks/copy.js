const gulp = require('gulp');

exports.copy = function() {
  return gulp.src([
    './_bundles/pushape-js.js',
    './_bundles/pushape-js.js.map',
  ]).pipe(
    gulp.dest('./example'),
  );
};
