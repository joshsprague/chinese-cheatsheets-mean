
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , Mongoose = require('mongoose');

var app = express();
var db = Mongoose.createConnection('localhost', 'chinese-cheatsheets');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var translations = [
      { english: "cat", chinese: "猫"},
      { english: "dog", chinese: "狗"},
      { english: "horse", chinese: "马"}
];

var TranslationSchema = require('.models/Translation.js').TranslationSchema;
var Translation = db.model('translations', TranslationSchema);

app.get('/', routes.index(translations));
app.get('/users', user.list);

app.post('/translation.json', routes.addTranslation(translations));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
