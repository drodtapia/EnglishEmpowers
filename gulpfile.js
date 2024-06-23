const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

// Minificar HTML
gulp.task('minify-html', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Minificar CSS
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

// Minificar y concatenar JS
gulp.task('minify-js', () => {
  return gulp.src('js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
});

// Tarea por defecto para ejecutar todas las tareas
gulp.task('usemin', gulp.parallel('minify-html', 'minify-css', 'minify-js'));
