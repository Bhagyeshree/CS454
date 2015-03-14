var _ = require('lodash');
var async = require('async');
var fs = require('fs');

function _applyConversion(data) {
  var result = {
    entries: []
  };

  data.entries.forEach(function(item) {
    var mapping = _convertToObject(item.media);
    result.entries.push({
      company: item.company,
      media: mapping
    });
  });
  result.totals = data.totals;

  return result;
}

function _mapData(data, mapping, callback) {
  data.entries.forEach(function(item) {
    for (var key in mapping) {
      if (item.media[key]) {
        var title = mapping[key];
        var count = item.media[key];

        item.media[key] = {};
        item.media[key][title] = count;
        item.media[key].popularity = Math.round((count/(data.totals[key])) * 100);
      }
    }
  });

  return data;
}

function _writeData(data, callback) {
  fs.writeFile("./mapped.media.json", JSON.stringify(data), function(err) {
    callback(err, data);
  });
}

function _convertToObject(arr) {
  var obj = {};
  arr.forEach(function (arg) {
    obj[arg[0]] = arg[1];
  });
  
  return obj;
}

var conversionApp = exports.conversionApp = function(media, mapping, callback) {
  async.waterfall([
    function arrayToObject(next) {
     var result =  _applyConversion(media);
     next(null, result);
    },
    function applyMapping(result, next) {
      var mapped = _mapData(result, mapping);
      next(null, mapped);
    },
    function writeStats(mapped, next) {
      _writeData(mapped, next);
    }
  ], function done(err, result) {
    callback(err, result);
  });
};

var mediaFile = require('./media');
var mappingFile = require('./mappings');

// run the app by executing command: node app.js
conversionApp(mediaFile, mappingFile, function(err, result) {
  //console.log(result); 
});
