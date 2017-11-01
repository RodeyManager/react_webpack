/**
 * Created by Rodey on 2017/11/1
 */
'use strict';
const env      = require('../app-env');
const jsLoader = require('../loaders/jsLoader');

module.exports = {
    src: 'assets/{fonts,images,js,libs}/**/*',
    filters: [
        'assets/js/libs.js'
    ],
    dest: 'assets',
    loader: jsLoader()
};