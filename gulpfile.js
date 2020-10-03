const gulp = require('gulp')

gulp.task('default', function () {
    return gulp.src('dist/**')
        .pipe(gulp.dest('client/public/'))
});