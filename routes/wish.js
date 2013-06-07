var mongo = require('mongodb');
var db = mongo.Db.connect('mongodb://localhost:27017/wish', {auto_reconnect: true}, function(err, db) {
    if (err)
      throw err;

    console.log("Got handler to database, yay!");
    /* // create a test collection in the database
    db.createCollection('test', function(err, test) {
      if (err)
        throw err;
      // insert a dummy document into the test collection          
      test.insert({'name':'admin', 'pass':'admin'});

      app.listen(3000); 
      console.log('App listening on port 3000');
    }); */
  });

exports.add = function (req, res) {
  // TODO: Validate input

  // TODO: db as a global variable decoupled from .add()
  var db = mongo.Db.connect('mongodb://localhost:27017/wish', {auto_reconnect: true}, function(err, db) {
    if (err)
      throw err;

    console.log("Got handler to database, yay!");
    db.collection('wishes', function(err, collection) {
      if (err)
        throw err;
      console.log("seems we're in...");
      collection.insert({tag: req.body.tag, price: req.body.price, date: new Date()}, function(err, result) {
        console.log("Insert done! Just out of curiosity: " + JSON.stringify(result));
      });
    });
    /* // create a test collection in the database
    db.createCollection('test', function(err, test) {
      if (err)
        throw err;
      // insert a dummy document into the test collection          
      test.insert({'name':'admin', 'pass':'admin'});

      app.listen(3000); 
      console.log('App listening on port 3000');
    }); */
  });
  
};