var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['css']);
    gulp.watch('src/scss/*.js', ['js]'])
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'src/js/**/*.js'
    ])
        .pipe(concat('linkui.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('icons', function() {
    return gulp.src('src/icons/*')
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('css', function() {
    return gulp.src('src/scss/linkui.scss')
        .pipe(concat('linkui.min.css'))
        .pipe(sass())
        .pipe(cleanss({
            keepBreaks: false,
            processImport: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['css', 'js', 'icons']);

gulp.task('default', ['build', 'watch']);