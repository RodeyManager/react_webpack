/**
 * Created by Rodey on 2017/11/1
 */

'use strict';

const http = require('http'),
      url = require('url'),
      path = require('path'),
      fs = require('fs');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});
server.listen(8080);