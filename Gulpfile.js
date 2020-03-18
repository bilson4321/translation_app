var gulp=require("gulp"),
    gutil=require("gulp-util"),
    jshint=require("gulp-jshint"),
    browserify=require("gulp-browserify"),
    concat=require("gulp-concat"),
    clean=require("gulp-clean");

var embedlr = require("gulp-embedlr"),
    refresh = require("gulp-livereload"),
    lrserver = require("tiny-lr")(),
    express = require("express"),
    livereload = require("connect-livereload"),
    livereloadport = 35729,
    serverport = 5000;
  
var server = express();
server.use(livereload({ port: livereloadport }));
server.use(express.static("./dist"));
server.all("/*", function(req, res) {
    res.sendFile("index.html", { root: "dist" });
});

gulp.task("dev", function() {
    server.listen(serverport);
    lrserver.listen(livereloadport);
    gulp.series("browserify","style","images","views","watch")();
});

gulp.task("lint",function(){
    return gulp.src("./app/scripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("browserify",function(){
    return gulp
        .src(["app/scripts/main.js"])
        .pipe(
            browserify(
                {
                    insertGlobals: true,
                    debug: true
                }
            )
        )
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(refresh(lrserver));
});

gulp.task("watch",function(){
    gulp.watch(
        ["app/scripts/main.js","app/scripts/*/*.js"],
        gulp.series("lint","browserify")
    );
    gulp.watch(["app/styles/*.css"], gulp.series("style"))
    gulp.watch(["app/images/*.*"], gulp.series("images"))
    gulp.watch(["app/index.html", "app/views/**/*.html"], gulp.series("views"));
});

gulp.task("views",function(){
    gulp.src("app/index.html")
         .pipe(gulp.dest("dist/"));
    return gulp.src("./app/views/**/*")
         .pipe(gulp.dest("dist/views/"))
         .pipe(refresh(lrserver));
});

gulp.task("style",function(){
    return gulp.src("./app/styles/*.css")
         .pipe(concat("style.css"))
         .pipe(gulp.dest("dist/styles/"))
         .pipe(refresh(lrserver));
});

gulp.task("images",function(){
    return gulp.src("./app/images/*.*")
         .pipe(gulp.dest("dist/images/"))
         .pipe(refresh(lrserver));
});
