var _ = require("lodash");
var chai = require('chai');
var fs = require('fs');
var nock = require('nock');
var supertest = require('supertest');
var rewire = require("rewire");

// rewire the file /routes/api
var api = rewire("../routes/api");

// use the expect assertion style of chai
var expect = chai.expect;

describe('App Test Suite', function() {

  var mocks = {};
  // read files and add them to the mock object
  before(function(done) {
    fs.readdirSync(__dirname + '/fixtures').forEach(function(file) {
      // mock.details = require('./fixtures/details.json')
      mocks[file.split('.')[0]] = require(__dirname + '/fixtures/' + file);
    });

    done();
  });

  describe('/api/details - Real Request', function() {
    it('returns details and languages from github API as JSON', function(done) {
      var app = require('../app').app;
      nock.enableNetConnect(app);

      // example of making a real request to github API
      supertest(app)
        .get('/api/details')
        .query({userRepo: 'cydneymikel/cs454'})
        .end(function(err, result) {
          expect(result.statusCode).to.equal(200);

          expect(result.body).to.have.property('repoDetails');
          expect(result.body).to.have.deep.property('repoDetails.full_name');
          expect(result.body).to.have.deep.property('repoDetails.description');
          expect(result.body).to.have.deep.property('repoDetails.homepage');
          expect(result.body).to.have.deep.property('repoDetails.stargazers_count');
          expect(result.body).to.have.deep.property('repoDetails.forks_count');

          expect(result.body).to.have.property('repoLanguages');

          // call the done callback
          done();
        });
    });
  });

  describe('/api/details - nock Request', function() {
    it('returns details and languages from github API as JSON', function(done) {

      // create a fake server with result code 200 and body
      nock('http://localhost:3000')
        .get('/api/details')
        .reply(200, {
          repoDetails: mocks.details,
          repoLanguages: mocks.languages
        });

      // test against the fake server created above
      supertest('http://localhost:3000')
        .get('/api/details')
        .end(function(err, result) {
          expect(result.statusCode).to.equal(200);

          expect(result.body).to.have.property('repoDetails');
          expect(result.body).to.have.deep.property('repoDetails.full_name');
          expect(result.body).to.have.deep.property('repoDetails.description');
          expect(result.body).to.have.deep.property('repoDetails.homepage');
          expect(result.body).to.have.deep.property('repoDetails.stargazers_count');
          expect(result.body).to.have.deep.property('repoDetails.forks_count');

          expect(result.body).to.have.property('repoLanguages');

          // call the done callback
          done();
        });
    });
  });

  describe('_calculateStats()', function() {
    it('returns percent values for languages in repo', function(done) {

      //use the rewire __get__ method to access the 'private' function
      var _calculateStats = api.__get__('_calculateStats');

      // declare a variable results to hold the return from the private function
      var results = _calculateStats(mocks.languages);

      var total = 0;
      _.each(results, function(value, key) {
        expect(value).to.be.a('Number');
        total += value;
      });
      expect(total).to.equal(100);

      // call the done callback
      done();
    });
  });

});
