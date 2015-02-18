var _ = require('lodash');
var async = require('async');
var superagent = require('superagent');

var github = 'https://api.github.com';

module.exports = function(app) {

  app.get('/api/top-three', function(req, res) {
    superagent
      .get(github + '/search/repositories?q=language:' + req.query.language + '&sort=stars')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err || res.statusCode != 200) {
          res.send(err)
        } else {
          console.log(response.body);
          res.json(_.first(response.body.items, 3));
        }
      });
  });

  app.get('/api/versus', function(req, res) {
    async.map(req.query.languages, search, function(err, results) {
      res.json(_.object(req.query.languages, results));
    });
  });

};

function search(lang, next) {
  superagent
    .get(github + '/search/repositories?q=language:' + lang + '&sort=stars')
    .set('Accept', 'application/json')
    .end(function(err, response) {
      next(err, _.first(response.body.items, 3));
  });
};