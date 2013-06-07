var db = require('./db');

exports.index = function(req, res){
  db.findAll(function(allCurrentWishes) {
    res.render('index', { wishes: allCurrentWishes });
  });
};