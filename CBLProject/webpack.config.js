var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        entry1: __dirname + '/src/index.js',
    },
    output: {
        path: __dirname,
        filename: './build/index.js'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }, {
                test: /\.(scss|css)$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [commonsPlugin
    ,new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
    ,new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })
    ]
};
