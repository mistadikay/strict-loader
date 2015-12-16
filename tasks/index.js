exports.eslint = function eslint() {
    var CLIEngine = require('eslint').CLIEngine;

    return new Promise(function(resolve, reject) {
        var cli = new CLIEngine();
        var report = cli.executeOnFiles([ '.' ]);
        var formatter = cli.getFormatter();

        if (report.errorCount > 0 || report.warningCount > 0) {
            console.log(formatter(report.results));
        }

        if (report.errorCount === 0 && report.warningCount === 0) {
            return resolve('¯\\_(ツ)_/¯');
        }

        if (report.errorCount > 0) {
            return reject('(╯°□°)╯︵┻━┻');
        }

        resolve();
    });
};


exports.demo = function demo() {
    var path = require('path');
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var config = {
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
                        './index.js'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: 'demo/index.html',
                assets: {
                    bundle: 'bundle.js'
                }
            })
        ]
    };

    return new Promise(function(resolve, reject) {
        var server = new WebpackDevServer(webpack(config), {
            hot: true,
            stats: {
                colors: true,
                children: false,
                assets: false,
                version: false,
                hash: false,
                chunkModules: false
            }
        });

        server.listen('3000', function(err) {
            if (err) {
                return reject(err);
            }

            resolve('http://localhost:3000/webpack-dev-server/');
        });
    });
};
