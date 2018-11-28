const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

/*gulp.task('default', () =>
    gulp.src('../css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../css'))
);

gulp.task('default', function() {
  gulp.src(['*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});*/

gulp.task('default', () => {
  return gulp.src('../dist/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../css/dist'));
});


/*gulp.task('default', () => {
  return gulp.src('../*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});*/