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
        'src/js/**/*.js',
        'dist/plugins/stepy/*.js' //include custom stepy plugin
    ])
        .pipe(concat('linkui.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//jquery
gulp.task('jquery', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js'
        ])
        .pipe(gulp.dest('dist/plugins/jquery'));
});

//Plugin popper
gulp.task('popper', function() {
    return gulp.src([
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js.map'
        ])
        .pipe(gulp.dest('dist/plugins/popper'));
});

//Plugin flatpickr
gulp.task('flatpickr', function() {
    return gulp.src([
            'node_modules/flatpickr/dist/flatpickr.min.js',
            'node_modules/flatpickr/dist/l10n/de.js',
            'node_modules/flatpickr/dist/flatpickr.min.css'
        ])
        .pipe(gulp.dest('dist/plugins/flatpickr'));
});

//Plugin toastr
gulp.task('toastr', function() {
    return gulp.src([
            'node_modules/toastr/build/toastr.min.js',
            'node_modules/toastr/build/toastr.min.css',
            'node_modules/toastr/build/toastr.js.map'
        ])
        .pipe(gulp.dest('dist/plugins/toastr'));
});

//icon export
gulp.task('icons', function() {
    return gulp.src('src/icons/*')
        .pipe(gulp.dest('dist/icons'));
});

//css
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

gulp.task('build', ['css', 'js', 'icons', 'flatpickr', 'toastr', 'jquery', 'popper']);
gulp.task('default', ['build', 'js', 'watch']);