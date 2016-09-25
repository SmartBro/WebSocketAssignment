const join = require('path').join;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: join(__dirname, 'src/app.js'),
    output: { path: join(__dirname, 'build'), filename: 'bundle.js' },
    resolve: {
        alias: {
            'src': join(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            _: "lodash",
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: join(__dirname, 'build'),
        watchOptions: {
            aggregateTimeout: 300,
            hot: true,
            poll: 1000
        }
    }
};
