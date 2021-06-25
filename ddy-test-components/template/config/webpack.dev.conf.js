const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf.js');

module.exports = merge(common, {
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', // 服务器地址
        port: '8000', // 端口
        open: true, // 是否自动打开页面
        hot: true,
        hotOnly: true,
    },
})