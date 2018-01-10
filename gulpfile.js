var gulp = require('gulp'),
    // concat = require('gulp-concat'), //npm install gulp-concat --save-dev
    rename = require("gulp-rename"),
    purge = require('gulp-css-purge');

gulp.task('default', function() {
  return gulp
        .src(['css/**/*.css']) //input css
        // .pipe(concat('main.css')) //merge into single css file - remove if you want to process output into separate files
        .pipe(purge({
            trim : true,
            shorten : true,
            verbose : true,
            generate_report: true
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('cssoutput')) //output folder
});