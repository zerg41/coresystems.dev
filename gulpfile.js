var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('bs-start', function() {
    browserSync.init({
        watch: true,
        server: "./"
    })
});