'use strict';
var crypto = require('crypto');

var mongoose = require('mongoose'),
Hash = mongoose.model('Hash');


exports.hash_message = function(req, res) {
    let payload = {}
    let message = req.body.message;
    payload.message = message;
    let hash = crypto.createHash('sha256').update(message).digest('hex');
    payload.value = hash;    
    var new_hash = new Hash(payload);
    new_hash.save(function(err, res) {
      if (err)
        res.send(err);
    });
    res.json(hash);
};

  exports.return_hash = function(req, res) {
    // var query = hash.SomeValue.find({}).select('name -_id');
    Hash.find({value:req.params.hash}, 'message', function(err, hash) {
        if (err)
          res.send(err);
        if (hash.length == 0)
          res.status(404).send("404 - not found");
        let val = hash.map(row => {
            return row.message;
        });
        res.json(val[0]);
      });
};