var _ = require('lodash');
var async = require('async');
var fs = require('fs');


// Poor Code Examples

// EXAMPLE 1 - 0/50 - because these are copy pasted from github
//ascending order
async.sortBy([1,9,3,5], function(x, callback){
    callback(null, x);
}, function(err,result){
  console.log(result);
} );

//descending order
async.sortBy([1,9,3,5], function(x, callback){
    //x * -1 instead of x, turns the order around
    callback(null, x * -1);
}, function(err,result){
  console.log(result);
} );


// EXAMPLE 2 - 10/50 - weak code with no value - this could be done without using async module
var facebooks = [{
  company: 'Github',
  likes: 500000,
}, {
  company: 'Google',
  likes: 1200000,
},
{
  company: 'Yahoo',
  likes: 900000,
}];

var totalLikes = 0;
async.each(facebooks, function(facebook, callback) {
  totalLikes += facebook.likes;
  callback();
}, function(err){
  console.log(totalLikes);
});




// Good Example - 50/50 - if you you can show this type of example and be able to explain the code in detail
var media = require('./media');
var mapping = require('./mappings');

async.waterfall([
  function arrayToObject(next) {
    var result = { entries: [] };

    media.entries.forEach(function(item) {
      var mapping = item.media.convertToObject();
      result.entries.push({company: item.company, media: mapping});
    });

    result.totals = media.totals;

    next(null, result);
  },
  function applyMapping(result, next) {

    result.entries.forEach(function(item) {
      for (var key in mapping) {
        if (item.media[key]) {
          var title = mapping[key];
          var count = item.media[key];

          item.media[key] = {};
          item.media[key][title] = count;
          item.media[key].popularity = Math.round((count/(result.totals[key])) * 100);
        }
      }
    });

    next(null, result);
  },
  function writeStats(mapped, next) {
    fs.writeFile("./mapped.media.json", JSON.stringify(mapped), function(err) {
      if (err) { console.log(err); }
      next(err, mapped);
    });
  }], function done(err, result) {
    console.log(result);
});


Array.prototype.convertToObject = function() {
  var obj = {};
  this.forEach(function (arg) {
    obj[arg[0]] = arg[1];
  });
  return obj;
};
