
/*
 * GET home page.
 */
var mongo = require('mongodb');
exports.index = function(req, res){

  var db = mongo.Db.connect('mongodb://localhost:27017/wish', {auto_reconnect: true}, function(err, db) {
    if (err)
      throw err;

    db.collection('wishes', function(err, collection) {
      if (err)
        throw err;

      collection.find().toArray(function (err, items) {
        if (err)
          throw err;

        console.log("items fetched to prepopulate page: " + JSON.stringify(items));
        res.render('index', { wishes: items });
      }); 
    });
  });
};