const join = require('path').join;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader') },
            { test: /\.scss$/, loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!resolve-url!sass?outputStyle=expanded&sourceMap' },
            {
                test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
                loaders: [ `file?context=./&name=assets/static/[ext]/[name].[ext]` ]
            }
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
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: join(__dirname, 'build'),
        watchOptions: {
            aggregateTimeout: 300,
            hot: true,
            poll: 1000
        }
    },
    'postcss': [
        autoprefixer({
            browsers: [
                'last 3 versions',
                'iOS >= 7',
                'Android >= 4',
                'Explorer >= 11',
                'ExplorerMobile >= 11'
            ],
            cascade: false
        })
    ]
};
