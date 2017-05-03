
var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        context: __dirname + '/source',
        cache: false,
        entry: {
            main: ['./require.ts', './template.ts']
        },

        output: {
            path: __dirname + '/dist/js',
            filename: 'template.js',
            library: 'Template',
        },

        resolve: {
            modules: ['node_modules', 'source'],
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: [/node_modules/, 'tests'],
                    use: [{ loader: 'ts-loader' }]
                },
                { test: /(\.glsl|\.vert|\.frag)$/, use: { loader: 'webpack-glsl-loader' } }]
        },
        plugins: [],
        devtool: 'source-map',
    };
