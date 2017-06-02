import gulp from 'gulp'
import babel from 'gulp-babel'
import gutil from 'gulp-util'
import browserify from 'browserify'
import babelify from 'babelify' // eslint-disable-line no-unused-vars
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'

const dev = gutil.env.env !== 'production'

/**
 * Gulp build task
 * Runs compile:* tasks and copy:views
 */
gulp.task('build', ['compile:client', 'compile:es6', 'copy:views'])

/**
 * Gulp compile client side task.
 * src/client/index.js is the entry point. Browserify react components
 * and create bundle.js under static/js/.
 * Also, uglify it if production mode.
 */
gulp.task('compile:client', () => {
  process.env.NODE_ENV = dev ? 'development' : 'production'
  return browserify({entries: './src/client/', extensions: ['.jsx'], debug: dev})
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(dev ? gutil.noop() : buffer())
    .pipe(dev ? gutil.noop() : uglify())
    .pipe(gulp.dest('static/js'))
})

/**
 * Gulp compile ES6 task.
 * Compiles src/server and src/config for node.
 */
gulp.task('compile:es6', () => {
  return gulp.src(['src/**/*.js', '!src/client/**'])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

/**
 * Gulp copy views folder task.
 * Copies src/server/views to src/server/views.
 */
gulp.task('copy:views', () => {
  return gulp.src('src/server/views/*')
    .pipe(gulp.dest('dist/server/views'))
})

/**
 * Gulp task to watch client side.
 */
gulp.task('watch', ['compile:client'], () => {
  gulp.watch('./src/client/**/*', ['compile:client'])
})

/**
 * Gulp default task.
 */
gulp.task('default', ['watch'])
