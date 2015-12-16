var path = require('path');

module.exports = {
    cache: true,
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
        preLoaders: [
            {
                test: /\.js$/,
                loaders: [
                    './index.js'
                ]
            }
        // ],
        // loaders: [
        //     {
        //         test: /\.json$/,
        //         loader: 'json'
        //     },
        //     {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract(
        //             'style',
        //             'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        //         )
        //     }
        ]
    }
};
