var db = require('./db');

exports.addWish = function (req, res) {
  // TODO: Validate input

  db.insert(req.body.tag, req.body.price);
};

exports.fetchAllWishes = function (req, res) {
  db.findAll(function(allWishes) {
    res.send(allWishes);
  })
};