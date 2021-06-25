const path = require('path');
const webpack = require('webpack');
const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ClearWebpackPlugin = require('clear-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf.js');


module.exports = merge(common, {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "../public/assets"),
                to: path.resolve(__dirname, "../build/assets")
            }, ],
        }),
        new MiniCssPlugin({
            filename: './css/index.css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true,
        }),
    ]
})