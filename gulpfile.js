const { series, parallel, src, dest } = require("gulp");

const gulp = require("gulp"),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create();

gulp.task("less", function () {
    return src("./src/assets/styles/main.less")
        .pipe(less())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(dest("./dist"));
});

gulp.task("html", function () {
    return gulp.src("./src/views/*.html").pipe(gulp.dest("./dist"));
});

gulp.task("js", function () {
    return gulp.src("./src/assets/scripts/*.js").pipe(gulp.dest("./dist"));
});

gulp.task("images", function () {
    return gulp.src("./src/assets/images/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "dist",
        },
    });

    gulp.watch("./src/assets/scripts/*.js").on("change", series("js"));
    gulp.watch("./src/assets/styles/**/*.less").on("change", series("less"));
    gulp.watch("./src/views/index.html").on("change", series("html"));
    gulp.watch("./src/views/checkbox.html").on("change", series("html"));
    gulp.watch("./src/views/yandex.html").on("change", series("html"));

    gulp.watch("./dist/*.js").on("change", series("js"));
    gulp.watch("./dist/main.css").on("change", browserSync.reload);
    gulp.watch("./dist/*.html").on("change", browserSync.reload);
});

gulp.task("build", series("less", "js", "images", "html"));

gulp.task("default", series(parallel("html", "less", "js", "images"), "serve"));
