
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/top3', function(req, res) {
    res.render('top');
  });

// express has a called render
// it looks at the view engine and views directory
  app.get('/versus', function(req, res) {
    res.render('versus');
  });

};