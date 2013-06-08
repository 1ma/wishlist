
/**
 * Module dependencies.
 */

var express = require('express')
  , wishes = require('./routes/wishes')
  , db = require('./routes/db')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

var oneYear = 31536000000;
app.use(express.static(path.join(__dirname, 'public'), {maxAge: oneYear}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/wishes', wishes.addWish);
app.get('/wishes', wishes.fetchAllWishes);

db.init();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
