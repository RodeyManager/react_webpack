'use strict';

const htmlLoader = require('../loaders/htmlLoader');

module.exports = {
    src: ['views/**/*.html'],
    filters: [],
    rely: [
        'build.css',
        'build.lib.js',
        'build.modules.views'
    ],
    dest: 'views',
    loader: htmlLoader(),
    watch: ['../src/**/*']
};