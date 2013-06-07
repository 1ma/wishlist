var db = require('./db');

exports.add = function (req, res) {
  // TODO: Validate input

  db.insert(req.body.tag, req.body.price);

  /*db.collection('wishes', function(err, collection) {
    if (err)
      throw err;

    console.log("seems we're in...");
    collection.insert({tag: req.body.tag, price: req.body.price, date: new Date()}, function(err, result) {
      console.log("Insert done! Just out of curiosity: " + JSON.stringify(result));
    });
  });*/
};