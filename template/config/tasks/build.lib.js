/**
 * Created by Rodey on 2017/11/1
 */
'use strict';

const env = require('../app-env');
const jsLoader = require('../loaders/jsLoader');

module.exports = {
    src: [
        '../node_modules/axios/dist/axios.min.js',
        '../node_modules/react/umd/react.production.min.js',
        '../node_modules/react-dom/umd/react-dom.production.min.js'
    ],
    dest: 'assets/js',
    loader: Object.assign({
        'gulp-concat': 'libs.js'
    }, jsLoader())
};