var app = require('../app');
var chai = require('chai');
var expect = chai.expect;

// execute the tests in this file by running the command: mocha test
describe('Conversion App', function() {

  describe('arrayToObject()', function() {

    it('should return an object from a 2D array', function(done) {
      var testValue = [['social media', 'facebook'], ['company', 'github'], ['likes', 48445]];

      var result = app.arrayToObject(testValue);
      expect(result).to.have.property('socialMedia', 'facebook');
      expect(result).to.have.property('company', 'github');
      expect(result).to.have.property('likes', 48445);

      done();
    });


    it('should return an object when given mixed array', function(done) {
      var testValue = ['social media', 'facebook', 'company', 'github', ['likes', 48445]];

      var result = app.arrayToObject(testValue);
      expect(result).to.not.have.property('social media');
      expect(result).to.not.have.property('company');
      expect(result).to.have.property('likes', 48445);
      
      done();
    });

    it('should return an empty object when given 1D array', function(done) {
      var testValue = ['social media', 'facebook', 'company', 'github', 'likes', 48445];

      var result = app.arrayToObject(testValue);
      expect(result).to.be.an('object').and.to.be.empty;
      
      done();
    });

    it('should return an error when given an object', function(done) {
      var testValue = { 'social media': 'facebook', company: 'github', likes: 48445 };

      var result = app.arrayToObject(testValue);
      expect(result).to.be.instanceof(Error);
      expect(result.message).to.equal('Argument must by a 2D Array');

      done();
    });
  });

  describe('toCamelCase()', function() {

    it('should return a camel cased string', function(done) {
      var testValue = 'hello world_itS_ME';

      var result = app.toCamelCase(testValue);
      expect(result).to.equal('helloWorldItsMe');

      done();
    });

    it('should return an error when given object', function(done) {
      var testValue = { sentence: 'hello world_itS_ME' };

      var result = app.toCamelCase(testValue);
      expect(result).to.be.instanceof(Error);
      expect(result.message).to.equal('Argument must be of type String');

      done();
    });
  });

});