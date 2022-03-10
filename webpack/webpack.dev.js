const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: 'index.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URL: 'url',
            DEBUG: true
        })
    ]
});
