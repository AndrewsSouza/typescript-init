
var webpackConfig = require('./webpack.config');

module.exports = function (config) {

    config.set({
        basePath: '',
        customLaunchers: {
            OurChrome: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu', '--disable-web-security', '--remote-debugging-port=9222']
            }
        },
        browsers: [
            /* 'OurChrome'], // todo is not configured correctly */
            'PhantomJS'],
        files: [
            'source/tests/**/*.test.ts',
            'node_modules/es6-shim/es6-shim.js'],
        frameworks: ['jasmine'],
        webpack: {
            devtool: 'eval-source-map',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        webpackMiddleware: {
            quiet: true,
            stats: {
                colors: true
            }
        },
        preprocessors: {
            'source/**/*.ts': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'junit'],
        junitReporter: { outputDir: 'dist/test-results/' },
        watch: false,
        colors: true,
        singleRun: true,
        /*concurrency: Infinity*/
        noResolve: false
    });
};
