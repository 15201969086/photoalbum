'use strict';

const gulp = require('gulp');
const gulpLess = require('gulp-less');

gulp.task('less2css', () => {

    gulp.src('./src/less/**/*.less')
        .pipe( gulpLess() )
        .pipe( gulp.dest('./www/public/css') );

});

gulp.task('default', ['less2css'], () => {

});





gulp.watch('./src/less/**/*.less', ['less2css']);