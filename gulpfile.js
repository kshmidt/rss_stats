var gulp = require("gulp"),
    connect = require("gulp-connect"),
    wiredep = require("wiredep").stream,
    exec = require("child_process").exec,
    htmlmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify"),
    cleanCSS = require("gulp-clean-css"),
    useref = require("gulp-useref"),
    gulpif = require("gulp-if");

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

gulp.task("browserify", function (cb) {
    exec('browserify -t [ babelify --presets [ react ] ] "./app/js/main.jsx" -o "./app/js/bundle.js"', function (err, stdout, stderr) {
        console.log(stderr);
        cb(err)
    });
})

gulp.task("watch", function () {
    gulp.watch(["./app/*.html"], ["html"]);
    gulp.watch(["./app/css/*.css"], ["css"]);
    gulp.watch(["./app/js/*.js"], ["js"]);
    gulp.watch(["./app/js/main.jsx"], ["browserify"]);
    gulp.watch(["./app/js/components/*.jsx"], ["browserify"]);
    gulp.watch(["./bower.json"], ["bower"]);
});

gulp.task("htmlmin", function () {
    return gulp.src("./dist/index.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./dist/"))
});

gulp.task("icons", function () {
    return gulp.src("./app/bower_components/bootstrap/fonts/*")
        .pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("xml", function () {
    return gulp.src("./app/xml/*")
        .pipe(gulp.dest("./dist/xml/"));
});

gulp.task("useref", function () {
    return gulp.src("./app/index.html")
        .pipe(useref())
        .pipe(gulpif("*.js", uglify()))
        .pipe(gulpif("*.css", cleanCSS({compatibility: "ie8"})))
        .pipe(gulp.dest("./dist"));
});

gulp.task("build", ["browserify", "useref", "htmlmin", "icons", "xml"]);

gulp.task("default", ["browserify", "connect", "watch"]);
