let gulp = require("gulp");

gulp.task("sass", function() {
  return gulp
    .src("static/scss/styles.css")
    .pipe(sass())
    .pipe(gulp.dest("build/css"));
});

// gulp.task("autoprefixer", function(){
//     let postcss = require("gulp-postcss")
//     let sourcemaps = require("gulp-sourcemaps")
//     let autoprefixer = require("autoprefixer")

//     return gulp.src("build/css/styles.css")
//     .pipe(sourcemaps.init())
//     .pipe(postcss([autoprefixer()]))
//     .pipe()
// })
