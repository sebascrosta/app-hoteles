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

/** Compila Jade a HTML*/
gulp.task('compile-jade', () => {

    return gulp
        .src(`${config.appFolder }**/*.jade`)
        .pipe(plugs.jade())
        .pipe(plugs.htmlmin())
        .pipe(gulp.dest(config.appFolder));
});

/** Compila los Pug/Jade y los JS */

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

/** Compila los scss a CSS*/
gulp.task('styles-app', () => {

    return gulp
        .src(config.mainscss)
        .pipe(plugs.sass())
        .pipe(plugs.rename(`${config.projectName}.css`))
        .pipe(plugs.if(optimize, plugs.combineMq()))
        .pipe(plugs.if(optimize, plugs.csso()))
        .pipe(plugs.if(optimize, plugs.rev()))
        .pipe(gulp.dest(config.build));
});


/** Junta todos los JS en uno*/
gulp.task('scripts-lib', () => {
    const mainBowerFiles = require('main-bower-files');
return gulp
    .src(mainBowerFiles('**/*.js'))
    //.pipe(plugs.debug())
    .pipe(plugs.concat(`${config.projectName }-lib.js`))
    .pipe(plugs.if(optimize, plugs.uglify()))
    .pipe(plugs.if(optimize, plugs.stripDebug()))
    .pipe(plugs.if(optimize, plugs.rename({extname: '.min.js'})))
    .pipe(gulp.dest(config.build));
});

/** Watch, manda los cambios al SV cada vez que se guarda un archivo Jade, JS o SCSS*/

gulp.task('watch', ()=> {

    gulp.watch(config.files.jade, ['scripts-app']);
    gulp.watch(config.files.js,   ['scripts-app']);
    gulp.watch(config.files.sass, ['styles-app']);
    gulp.watch(config.files.html), ['scripts-app'];
});

gulp.task('font', ()=> {
    return gulp
        .src(`${config.font }`)
        .pipe(gulp.dest(config.build));
});

/** Manda el index a build?*/

gulp.task('bundle', ['watch'], () => {

    return gulp.src(`${config.index}`)
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

gulp.task('build', ['styles-app', 'scripts-lib', 'scripts-app', 'font']);


gulp.task('nodemon', () => {
    plugs.nodemon({
    script: './src/server/index.js',
    ext: 'js html',
    env: {
        'DEBUG' : 'app:server',
        'NODE_ENV' : 'development'
    },
    ignore: [
        config.build,
    ],
})
    .on('restart', function () {
        console.log('server restarted!')
    })
});

gulp.task('default', ['build', 'inject','nodemon']);