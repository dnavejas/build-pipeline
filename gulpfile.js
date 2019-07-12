let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("static/scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css"));
});

gulp.task("autoprefixer", function() {
  let postcss = require("gulp-postcss");
  let sourcemaps = require("gulp-sourcemaps");
  let autoprefixer = require("autoprefixer");

  return gulp
    .src("build/css/styles.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
});
