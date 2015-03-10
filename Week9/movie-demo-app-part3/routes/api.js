var async = require('async');
var config = require('../config');
var superagent = require('superagent');

module.exports = function (app) {
  
  app.get('/movies/search', function(req, res) {
    superagent
      .get(config.api.base + '/movies.json')
      .query({apikey: config.api.key})
      .query({q: req.query.title})
      .query({page_limit: 9})
      .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          console.log('///// movies search');
          console.log(JSON.parse(result.text));
          res.json(JSON.parse(result.text));
        }
      });
  });

  app.get('/movies/review', function(req, res) {

    superagent
      .get(config.api.base + '/movies/' + req.query.id + '/reviews.json')
      .query({apikey: config.api.key})
      .query({page_limit: 3})
      .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          console.log('///// movies reviews');
          console.log(JSON.parse(result.text));
          res.json(JSON.parse(result.text));
        }
      });
  });

  app.get('/movies/details', function(req, res) {

    superagent
      .get(config.api.base + '/movies/' + req.query.id + '.json')
      .query({apikey: config.api.key})
      .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          console.log('///// movies detail');
          console.log(JSON.parse(result.text));
          res.json(JSON.parse(result.text));
        }
      });
  });


  app.get('/movies/boxoffice', function(req, res) {

    superagent
      .get(config.api.base + '/lists/dvds/top_rentals.json')
      .query({apikey: config.api.key})
      .query({limit: 16})
      .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          res.json(JSON.parse(result.text));
        }
      });
  });


  app.get('/movies/versus', function(req, res) {

    async.parallel({
      mainDetail: function(next) {
        _movieDetails(req.query.main, next);
      },
      mainReviews: function(next) {
        _movieReviews(req.query.main, next);
      },
      challengerDetail: function(next) {
        _movieDetails(req.query.challenger, next);
      },
      challengerReviews: function(next) {
        _movieReviews(req.query.challenger, next);
      }
    }, function done(err, results) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(results);
      }
    });
  });

};

function _movieReviews(id, callback) {
  superagent
    .get(config.api.base + '/movies/' + id + '/reviews.json')
    .query({apikey: config.api.key})
    .end(function(err, result) {
      callback(err, JSON.parse(result.text));
  });
}

function _movieDetails(id, callback) {
  superagent
    .get(config.api.base + '/movies/' + id + '.json')
    .query({apikey: config.api.key})
    .end(function(err, result) {
      callback(err, JSON.parse(result.text));
  });
}