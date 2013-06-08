var db = require('./db');

exports.addWish = function (req, res) {
  // TODO: Validate input

  db.insert(req.body.tag, req.body.price, function(code) {
    if (code != "OK")
      res.status(400);

    res.send();
  });
};

exports.fetchAllWishes = function (req, res) {
  db.findAll(function(allWishes) {
    res.send(allWishes);
  })
};