// File for defining gulpJs tasks.
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import browserSync, { reload } from 'browser-sync';
import sass from 'gulp-sass';
import notify from 'gulp-notify';
import eslint from 'gulp-eslint';
import modRewrite from 'connect-modrewrite';

var sourceJsPath  = './app/scripts/index.jsx',
    sourceCssPath = './app/styles/index.scss',
    testJsPath    = './app/**/**/**/**/*.jsx';

gulp.task('buildJs', () => {
  return browserify({
    entries: sourceJsPath,
    extensions: ['.jsx'],
    debug: true
  }).
  transform('babelify', { presets: ['es2015', 'react'] }).
  bundle().
  on('error', notify.onError()).
  pipe(source('bundle.js')).
  pipe(gulp.dest('dist')).
  pipe(reload({ stream: true }));
});

gulp.task('testJs', () => {
  return gulp.src(testJsPath).
    pipe(eslint()).
    pipe(eslint.format());
});

gulp.task('buildCss', () => {
  return gulp.src(sourceCssPath).
  pipe(sass().on('error', notify.onError())).
  pipe(gulp.dest('dist')).
  pipe(reload({ stream: true }));
});

gulp.task('watchJs', ['testJs', 'buildJs'], browserSync.reload);
gulp.task('watchCss', ['buildCss'], browserSync.reload);

gulp.task('serve', ['buildJs', 'buildCss'], () => {
  browserSync.init({
    server: {
      baseDir: './app',
      routes: {
        "/dist/" : "./dist/"
      },
      middleware: [
        modRewrite([
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    }
  });

  gulp.watch('app/**/**/**/**/*.jsx', ['watchJs']);
  gulp.watch('app/styles/**/*.scss', ['watchCss']);
});

gulp.task('default', ['serve']);