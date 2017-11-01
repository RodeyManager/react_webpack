/**
 * Created by Rodey on 2017/10/19.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build/modules')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    stats: 'none'

};