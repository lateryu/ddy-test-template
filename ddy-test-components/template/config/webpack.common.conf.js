const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ClearWebpackPlugin = require('clear-webpack-plugin');


module.exports = {
    target: 'web',
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "build.js"
    },

    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path]zidingyi.png', // 文件打包成build/public/xxx.png
                        // context: '../', // 文件打包成build/webapckdemo/public/xxx.png
                        publicPath: './', // 文件src会被打包成http://www/baidu.com/img/public/xxx.png"
                        // outputPath: './img' // 打包成build/img/xxx.png, [path]需要去掉
                    }
                }]
            }, {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssPlugin({
            filename: './css/index.css'
        }),
    ]
}