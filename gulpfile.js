const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('compile', shell.task('npm run build'))

gulp.task('watch', function () {
  gulp.watch('./src/**', ['compile'])
})









