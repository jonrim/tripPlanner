var express = require('express');
var app = express();
var morgan = require('morgan');
var swig = require('swig');
var indexRouter = require('./routes/index');
var fs = require('fs');
var bodyParser = require('body-parser');
// var path = require('path');
var pg = require('pg');
var models = require('./models');
var conString = 'postgres://postgres:password@localhost:5432/tripplanner';
var client = new pg.Client(conString);

// templating boilerplate setup
app.set('views', path.join(__dirname, '/views')); // where to find the views
app.set('view engine', 'html'); // what file extension do our templates have
app.engine('html', swig.renderFile); // how to render html templates
swig.setDefaults({ cache: false });

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// start the server
var server = app.listen(1337, function(){
  console.log('listening on port 1337');
});
// var io = socketio.listen(server);


// connect to postgres
client.connect();


// the typical way to use express static middleware.
app.use(express.static(path.join(__dirname, '/public')));


// include force: true on lines 48 and 50
// to wipe the database clean on every reboot
// models.User.sync({ force: true })

// models.User.sync()
// .then(function () {
//     return models.Page.sync()
// })
// .then(function () {
//     server.listen(1337, function () {
//         console.log('Server is listening on port 1337!');
//     });
// })
// .catch(console.error);

app.get('/', function(req, res, next) {
	
});


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});



