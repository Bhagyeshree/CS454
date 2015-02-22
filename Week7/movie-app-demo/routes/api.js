var config = require('../config');
var superagent = require('superagent');

module.exports = function (app) {
  
  app.get('/movies/search', function(req, res) {

    superagent
      .get(config.api.base + '/movies.json')
      .query({q: req.query.title})
      .query({apikey: config.api.key})
      .end(function(err, result) {

        //assuming first one is correct
        res.json(JSON.parse(result.text).movies[0]);
      });
  });
};