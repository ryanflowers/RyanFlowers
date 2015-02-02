"use strict";

var gulp = require('gulp');
var tsc = require('gulp-tsc');
//var tsc = require('gulp-typescript'); //This one actually displays errors unlike gulp-tsc
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var del = require('del');
var seq = require('run-sequence');
var gutil = require('gulp-util');

var tsOptions = {
    declarationFiles: true,
    noExternalResolve: false,
    removeComments: true,
    keepTree: true,
    module: 'amd',
    noImplicitAny: true,
    sortOutput: true,
    target: 'ES6'
};

gulp.task('clean', function (cb) {
    del('js/app/*', cb);
});

gulp.task('rebuild', function (cb) {
    seq('clean', 'build', cb);
});

gulp.task('build', function () {
    var tsResult = gulp.src(['app/*.ts', 'app/modules/*.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(debug({title: 'sources:'}))
        .pipe(tsc(tsOptions));

    return tsResult
        .pipe(sourcemaps.write())
        .pipe(debug({title: 'results:'}))
        .pipe(gulp.dest('js/app'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['app/*.ts', 'app/modules/*.d.ts'], ['build']);
});

