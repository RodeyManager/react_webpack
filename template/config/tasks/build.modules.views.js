'use strict';

const env           = require('../app-env');
const webpackConfig = require('../webpack.config')(env);

module.exports = {
    src: 'modules/**/*View.js',
    dest: 'modules',
    rely: ['build.css'],
    loader: {
        'gulp-webpack-multi-entry': webpackConfig
    }
};