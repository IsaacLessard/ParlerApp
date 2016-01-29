  var gzippo = require('gzippo');
  var express = require('express');
  var app = express();

  require('dotenv').load();

  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(3000);
