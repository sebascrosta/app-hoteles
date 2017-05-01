'use strict';

module.exports = function () {
    const pkg = require('./package.json');

    const server = './src/server/';
    const src = './src/';
    const scssfolder = `${src }client/scss/`;
    const mainscss = `${scssfolder }styles.scss`;
    const build = './build/';
    const appFolder = `${src}client/app/`;
    const index = `${src }client/index.html`;
    const font = `${src }client/scss/am-amenities.ttf`;

    const config = {
        projectName: pkg.name,
        appFolder,
        app: `${appFolder }app.module.js`,
        scssfolder,
        mainscss,
        angularRootApp: `${appFolder}core/`,
        build,
        index,
        src,
        font,
        images: `${src }client/images/`,
        fonts: `${scssfolder }fonts/`,
        vendorfolder: `${src }client/vendor/`,
        templateCache: {
            file: 'app.templates.js',
            options: {
                module: 'hotelsResult',
                moduleSystem: "IIFE"
            }
        },
        jsOrder: ['**/app.module.js', '**/*.module.js', '**/*.js'],
        files: {
            sass: `${src}**/*.scss`,
            js: [`${src}**/*.js`, `!${src}**/*.templates.js`],
            html: `${src}**/*.html`,
            jade: `${src}**/*.jade`
        }
    };
    return config;
};
