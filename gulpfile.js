var fs = require('fs');
var path = require('path');

var gulp        = require('gulp');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var sass        = require('gulp-sass');
var pug         = require('gulp-pug');
var cache       = require('gulp-cached');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var babel       = require("gulp-babel");
var merge       = require('merge-stream');
var notifier    = require('node-notifier');

var scriptsPath = 'js';
var builtPath = 'jsc';

// At least I tried :(
function globalErrorHandler(error) {
  try {
    let titlePath = error.relativePath || error.filename || error.fileName;
    let line = error.line || error.loc.line;
    let message = error.messageOriginal || error.msg || (error.message ? error.message.toString().substr(filename.length + 2) : "");

    notifier.notify({
      'title': 'Error ' + titlePath.toString(),
      'message': 'Line: ' + line.toString() + ' - ' + message.toString()
    });
  } catch(e) {
    notifier.notify('Fatal error, please read the terminal or the log file');
    console.log(error);

  } finally {
    this.emit('end');
  }
}

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('scripts', function() {
  var folders = getFolders(scriptsPath);
  var tasks = folders.map(function(folder) {
    return gulp.src(path.join(scriptsPath, folder, '/**/*.js'))
      // concat into foldername.js
      // .pipe(concat(folder + '.js'))
      // write to output

      .pipe(babel({presets: ['es2015', 'react'] }).on('error', globalErrorHandler))
      .pipe(uglify())
      .pipe(gulp.dest(path.join(builtPath, folder)))
      // minify
      //.pipe(uglify())
      // rename to folder.min.js
      //.pipe(rename(folder + '.min.js'))
      // write to output again
      //.pipe(gulp.dest(scriptsPath));
   });

   // process all remaining files in scriptsPath root into main.js and main.min.js files
   var root = gulp.src(path.join(scriptsPath, '/*.js'))
        //.pipe(concat('main.js'))
        .pipe(babel({presets: ['es2015', 'react'] })
          .on('error', globalErrorHandler))
        .pipe(uglify())
        .pipe(gulp.dest(builtPath))
        //.pipe(uglify())
        //.pipe(rename('main.min.js'))
        //.pipe(gulp.dest(scriptsPath));

   return merge(tasks, root);
});

gulp.task('sass-main', function () {
  return gulp.src('./sass/main.sass')
    .pipe(sass({indentedSyntax: true, outputStyle: 'compressed'})
      .on('error', globalErrorHandler))
    .pipe(gulp.dest('./PUBLIC/css'))
    .pipe(browserSync.stream());

});

gulp.task('pug-main', function() {
  return gulp.src('./pug/*.pug')
    .pipe(pug({ pretty: true })
      .on('error', globalErrorHandler))
    .pipe(gulp.dest('./PUBLIC/'))

});

/**
 *  Start local server and refresh page when changes are saved.
 */

gulp.task('pug-watch', ['pug-main'], () => {reload()});

gulp.task('default', ['sass-main', 'pug-main', /* scripts */], function () {

	browserSync.init({
		server: './PUBLIC',
		ip: "0.0.0.0",
		port: 8080,//env.PORT,
		ui: { port: 8081 },
    logPrefix: "Browser Sync",
    logConnections: true
	});

	gulp.watch('sass/**/*.sass', {cwd: './'}, ['sass-main']);
  // gulp.watch('js/**/*.js', {cwd: './'}, ['scripts']);
  gulp.watch('pug/**/*.pug', {cwd: './'}, ['pug-watch']);
});
