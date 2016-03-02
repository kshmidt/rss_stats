var gulp = require("gulp"),
    connect = require("gulp-connect"),
    wiredep = require("wiredep").stream,
    exec = require('child_process').exec,
    htmlmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify"),
    cleanCSS = require('gulp-clean-css');

gulp.task("connect", function () {
    connect.server({
        root: "app",
        livereload: true,
        port: 8888
    });
});

gulp.task("html", function () {
    gulp.src("./app/*.html")
        .pipe(connect.reload());
});

gulp.task("css", function () {
    gulp.src("./app/css/*.css")
        .pipe(connect.reload());
});

gulp.task("js", function () {
    gulp.src("./app/js/*.js")
        .pipe(connect.reload());
});

gulp.task("bower", function () {
    gulp.src("./app/index.html")
        .pipe(wiredep({
            directory: "./app/bower_components/"
        }))
        .pipe(gulp.dest("./app/"));
});

gulp.task('browserify', function () {
    exec('browserify -t [ babelify --presets [ react ] ] "./app/js/main.jsx" -o "./app/js/bundle.js"', function (stderr) {
        console.log(stderr);
    });
})

gulp.task("watch", function () {
    gulp.watch(["./app/*.html"], ["html", "minify"]);
    gulp.watch(["./app/css/*.css"], ["css", "minify-css"]);
    gulp.watch(["./app/js/*.js"], ["js"]);
    gulp.watch(["./app/js/main.jsx"], ["browserify", "compress"]);
    gulp.watch(["./app/js/components/*.jsx"], ["browserify", "compress"]);
    gulp.watch(["./bower.json"], ["bower"]);
});

gulp.task("minify", function () {
    return gulp.src("./app/index.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./dist/"))
});

gulp.task('minify-css', function() {
  return gulp.src('./app/css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task("compress", function () {
    return gulp.src("./app/js/bundle.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"));
});

gulp.task("default", ["connect", "watch"]);
