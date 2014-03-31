var app = require(APP_ROOT + '/app')
  , db = require(APP_ROOT + '/config/db');

// Base Route
app.get('/', function(req, res, next) {
  return res.render('index', {});
});

// Only do this in development mode
if (process.env.NODE_ENV == 'development'){
  app.get('/reset-db', function(req, res, next) {
    //db.MODEL_NAME.sync({force: true});
    return res.send('Database was reset');
  })
}
