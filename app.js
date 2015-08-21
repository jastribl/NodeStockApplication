// Generated by CoffeeScript 1.9.3
(function() {
  var app, bodyParser, controller, express, logger;

  express = require('express');

  logger = require('morgan');

  bodyParser = require('body-parser');

  controller = require('./controllers/index');

  app = express();

  app.set('view engine', 'jade');

  app.use(logger('dev'));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(express["static"]('public'));

  app.use(controller);

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      return res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.render('error', {
      message: err.message,
      error: {}
    });
  });

  module.exports = app;

}).call(this);
