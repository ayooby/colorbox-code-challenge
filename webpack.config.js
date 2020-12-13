/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 8090;
const isProduction = env === 'production';

const localPage = `http://localhost:${port}/`;
const networkPage = `http://${ip.address()}:${port}/`;
if (!isProduction) {
    console.log('%s \x1b[1m\x1b[36m%s\x1b[0m', 'Local page:', localPage);
    console.log('%s \x1b[1m\x1b[36m%s\x1b[0m', 'Network page:', networkPage);
    console.log('');
}

const config = {
    bail: true,
    mode: env,
    entry: {
        index: './src/index.js',
    },
    context: path.join(__dirname),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        chunkFilename: `[name]-${isProduction ? '[contenthash]' : ''}.js`,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            components: path.resolve(__dirname, '../src/components'),
        },
    },
    devtool: false,
    optimization: {
        minimize: isProduction,
    },
    module: {
        rules: [
            {
                exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.scss$/, /\.less$/, /\.json$/, /\.svg$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                  // The `injectType`  option can be avoided because it is default behaviour
                  { loader: 'style-loader', options: { injectType: 'styleTag' } },
                  'css-loader',
                ],
              },
        ],
    },
    plugins: [
    // This helps ensure the builds are consistent if source hasn't changed:
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './assets'),
                to: 'assets',
            }],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: false,
        }),
        new webpack.DefinePlugin({}),
    ],
    ...(!isProduction ? {
        devServer: {
            historyApiFallback: true,
            https: false,
            http2: false,
            port,
            useLocalIp: false,
            compress: isProduction,
            host: '0.0.0.0',
            openPage: localPage,
        },
    } : {}),
};

module.exports = config;
