'use strict';
module.exports = function(app) {
  var api_controller = require('../controller/main');

  // todoList Routes
  app.route('/messages')
    .post(api_controller.hash_message);


  app.route('/messages/:hash')
    .get(api_controller.return_hash)
};