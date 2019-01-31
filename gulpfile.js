const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile sass into CSS
function css(cb) {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
  cb();
};

// Move the javascript files into our /src/js folder
function js(cb) {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
    .pipe(gulp.dest("src/js"));
  cb();
};

// Watch SCSS folder for changes
function watchCss(cb) {
  gulp.watch("./src/scss/*.scss", css);
  cb();
};

gulp.task("css", css);
gulp.task("js", js);
gulp.task("watchCss", watchCss);

gulp.task('default', gulp.series('css', 'js'));
gulp.task("watch", gulp.series(watchCss));