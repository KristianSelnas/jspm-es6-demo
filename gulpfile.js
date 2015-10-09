var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

var htmlSrc = ['index.html', './app/**/*.html'],
    tsSrc = './app/**/*.ts',
    sassSrc = './app/style/app.scss',
    cssSrc = './app/style/*.css';

gulp.task('html', function() {
    gulp.src(htmlSrc)
        .pipe(connect.reload());
});

gulp.task('ts', function() {
    gulp.src(tsSrc)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(cssSrc)
        .pipe(connect.reload());
});

gulp.task('sass', function() {
   gulp.src(sassSrc)
       .pipe(sass())
       .pipe(gulp.dest('./app/style/'))
});



gulp.task('watch', function(){
    gulp.watch(htmlSrc, ['html']);
    gulp.watch(tsSrc, ['ts']);
    gulp.watch('./app/style/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

// Start the tasks
gulp.task('default', ['sass', 'connect', 'watch']);