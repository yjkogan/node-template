require('./config');

var express = require('express')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , expressHbs = require('express3-handlebars')
  , app = express();

module.exports = app;

app.set('views', __dirname + '/app/templates');
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout: __dirname + '/app/templates/base/main.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

// Enable us to get form data / read the body
app.use(bodyParser())
// Enable access to cookies
app.use(cookieParser());

// Require the routes
require('./app/routes');

//Error handling
app.use(function (err, req, res, next) {
  
  // log it
  console.log("Error is:");
  console.log(err);

  if (err.stack) {
    console.log(err.stack);
  }

  // error page
  res.status(500).send(err);

});

// assume 404 since no middleware responded
app.use(function (req, res, next) {
  res.render('errors/404', { url: req.originalUrl });
});

app.listen(process.env.PORT);
console.log("Listening on port " + process.env.PORT);