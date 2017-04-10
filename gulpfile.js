
const config = require('./gulp.config.js')();
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugs = gulpLoadPlugins();
const env = process.env.NODE_ENV || 'local';
const merge = require('merge-stream');
const eventStream = require('event-stream');
var optimize = false;


if (env === 'staging' || env === 'production') {
    optimize = true;
}


/**
 * Compiling jade into html for components.
 */
gulp.task('compile-jade', () => {
    return gulp
        .src(`${config.appFolder }**/*.pug`)
        .pipe(plugs.jade())
        .pipe(plugs.htmlmin())
        .pipe(gulp.dest(config.appFolder));
});


gulp.task('scripts-app', ['compile-jade'], () => {

    var scriptsStream = gulp.src(config.appFolder + '**/*.js'),
    templateCacheStream = gulp.src(config.appFolder + '**/*.html')
        .pipe(plugs.angularTemplatecache(config.templateCache.file, config.templateCache.options));

return eventStream.merge(templateCacheStream, scriptsStream)
    .pipe(plugs.order(config.jsOrder))
    .pipe(plugs.concat(`${config.projectName}.js`))
    .pipe(plugs.if(optimize, plugs.uglify()))
    .pipe(plugs.if(optimize, plugs.stripDebug()))
    .pipe(plugs.if(optimize, plugs.rename({extname: '.min.js'})))
    .pipe(gulp.dest(config.build));

});



gulp.task('inject', ['bundle'], () => {

    const series = require('stream-series');
// It's not necessary to read the files (will speed up things), we're only after their paths:
const scriptLib = gulp.src([`${config.build}*lib*.js`], {read: false});
const styleApp = gulp.src([`${config.build}*.css`, `!${config.build}*lib*.css`], {read: false});
const scriptApp = gulp.src([`${config.build}*.js`, `!${config.build}*lib*.js`], {read: false});
const seriesStreams = series(scriptLib, styleApp, scriptApp);

return gulp.src(`${config.build}index.html`)
    .pipe(plugs.inject(seriesStreams, {
        addPrefix:'/static',
        relative: true
    }))
    .pipe(gulp.dest(config.build));
});


gulp.task('bundle',['watch'], () => {

    return gulp.src(`${config.index}`)
        .pipe(gulp.dest(config.build));
})


gulp.task('watch', ()=> {
    gulp.watch(config.files.pug, ['scripts-app']);
    gulp.watch(config.files.js, ['scripts-app']);
    gulp.watch(config.files.sass, ['styles-app']);
});

gulp.task('nodemon', ()=> {
    plugs.nodemon({
    script: './src/server/index.js',
    ext: 'js html',
    env: {
        'DEBUG' : 'template:server'
        ,'NODE_ENV' : 'development'
    }
})
    .on('restart', () => {
        console.log('server restarted!');
    })
});


gulp.task('default',['inject', 'nodemon']);
