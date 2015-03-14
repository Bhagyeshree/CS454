var _ = require('lodash');
var async = require('async');
var config = require('../config');
var superagent = require('superagent');


module.exports = function(app) {

  app.get('/api/details', function(req, res) {
    async.parallel({
      repoDetails: function(next) {
        superagent
          .get(config.api.base + '/repos/' + req.query.userRepo)
          .end(function(err, response) {
            next(err, response.body);
          });
      },
      repoLanguages: function(next) {
        superagent
          .get(config.api.base + '/repos/' + req.query.userRepo + '/languages')
          .end(function(err, response) {
            next(err, response.body);
          });
      }
    }, function(err, results) {
      if (err) {
        res.json(err);
      } else {
        results.repoLanguages = _calculateStats(results.repoLanguages);
        res.json(results);
      }
    });
  });

};


function _calculateStats(languages) {
  var total = _.sum(languages);

  _.each(languages, function(value, key) {
    languages[key] = (value/total) * 100;
  });

  return languages;
}






