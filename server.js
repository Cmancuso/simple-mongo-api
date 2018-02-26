var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Hash = require('./src/model/api_model'), //created model loading here
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Hash'); 


  var routes = require('./src/route/api_routes'); //importing route
  routes(app); //register the route
app.listen(port);

console.log('API server started on: ' + port);
