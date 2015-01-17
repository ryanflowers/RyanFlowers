"use strict";

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
    removeComments: true,
    target: 'ES6',
    module: 'amd',
    noImplicitAny: true,
    sortOutput: true,
    sourceRoot: 'app/'
});

gulp.task('scripts', function () {
    var tsResult = gulp.src('app/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch('app/*.ts', ['scripts']);
});