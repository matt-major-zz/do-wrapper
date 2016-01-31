var gulp              = require('gulp'),
    babel             = require('gulp-babel'),
    uglify            = require('gulp-uglify'),
    SOURCE_DIRECTORY  = 'src/**/*.js',
    DEST_DIRECTORY    = 'dist/';

gulp.task('default', ['compile']);

gulp.task('compile', function () {
  return gulp.src(SOURCE_DIRECTORY)
          .pipe(babel({experimental: true}))
          .pipe(uglify())
          .pipe(gulp.dest(DEST_DIRECTORY));
});
