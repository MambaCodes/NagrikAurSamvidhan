const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    ],

    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        open: true,  // Automatically open the browser when the server starts
        hot: true,   // Enable Hot Module Replacement (HMR)
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,  // Clean the output directory before each build
    },
};
