"use strict";

var gulp = require('gulp');
var typescript = require('gulp-tsc');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var tsProject = {
    declarationFiles: true,
    noExternalResolve: false,
    removeComments: true,
    keepTree: true,
    module: 'amd',
    noImplicitAny: true,
    sortOutput: true
};

gulp.task('scripts', function () {
    var tsResult = gulp.src(['app/*.ts', 'app/modules/*.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject));

    return tsResult
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch(['app/*.ts', 'app/modules/*.d.ts'], ['scripts']);
});










//"use strict";
//
//var gulp = require('gulp');
//var ts = require('gulp-typescript');
//var sourcemaps = require('gulp-sourcemaps');
//var concat = require('gulp-concat');
//
//var tsProject = ts.createProject({
//    declarationFiles: true,
//    noExternalResolve: false,
//    removeComments: true,
//    target: 'ES6',
//    keepTree: true,
//    module: 'amd',
//    noImplicitAny: true,
//    sortOutput: true,
//    sourceRoot: 'app/'
//});
//
//gulp.task('scripts', function () {
//    var tsResult = gulp.src(['app/*.ts', 'app/modules/*.d.ts'])
//        .pipe(sourcemaps.init())
//        .pipe(ts(tsProject));
//
//    return tsResult.js
//        //.pipe(concat('AppConfig.js'))
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest('js'));
//});
//
//gulp.task('watch', ['scripts'], function () {
//    gulp.watch(['app/*.ts', 'app/modules/*.d.ts'], ['scripts']);
//});