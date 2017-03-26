'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    stats: {
        colors: true,
        reasons: false
    },
    output: {
        pathinfo: true,
        path: path.resolve('./'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    entry: [
        './demo/index'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    './index.js?generateSourceMapFromTokens'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'demo/index.html',
            assets: { bundle: 'bundle.js' }
        })
    ]
};
