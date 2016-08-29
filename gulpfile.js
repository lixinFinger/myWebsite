/**
 * Created by liliy_000 on 2016/8/26.
 */
var gulp = require("gulp");
var jade = require("gulp-jade"),
    less = require("gulp-less"),
    minCss = require("gulp-minify-css");

gulp.task("less", function (callback) {
    gulp.src("./less/style.less")
        .pipe(less())
        // .pipe(minCss()) // 压缩css文件
        .pipe(gulp.dest("./html/css"));
    callback();
});

gulp.task("jade", function (callback) {
    gulp.src("./jade/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("./html"));
    callback();
});

gulp.task('default', function(){
    gulp.run('less','jade');
});
gulp.task("build-dev" , ["less" , "jade"],function () {
    gulp.watch("./less/style.less",["less"]);
    gulp.watch("./jade/*.jade",["jade"])
        .on("change", function (event) {
            //devJadeSrc = event.path;
        });
});