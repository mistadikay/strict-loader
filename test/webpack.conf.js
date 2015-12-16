var path = require('path');

module.exports = {
    stats: {
        colors: true,
        reasons: false
    },
    output: {
        pathinfo: true,
        path: path.resolve('./'),
        publicPath: '/',
        filename: 'test.js'
    },
    entry: [
        './test/index'
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
    }
};
