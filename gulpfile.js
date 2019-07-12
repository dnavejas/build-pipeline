let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("static/scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css/sass"));
});

gulp.task("autoprefixer", function() {
  let postcss = require("gulp-postcss");
  let sourcemaps = require("gulp-sourcemaps");
  let autoprefixer = require("autoprefixer");

  return gulp
    .src("build/css/sass/styles.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css/auto"));
});
gulp.task("uncss", function() {
  let unCss = require("gulp-uncss");
  let sourcemaps = require("gulp-sourcemaps");
  return gulp
    .src("build/css/auto/styles.css")
    .pipe(sourcemaps.init())
    .pipe(
      unCss({
        html: ["static/html/index.html"]
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
});
