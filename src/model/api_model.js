'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HashSchema = new Schema({
  message: {
    type: String,
    required: 'Please enter String'
  },
  value: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hash', HashSchema);