const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: 'index.min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URL: 'url',
            DEBUG: false
        })
    ]
});
