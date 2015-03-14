var arrayToObject = function(arr) {

  if (!Array.isArray(arr)) {
    return new Error('Argument must by a 2D Array');
  }

  var obj = {};

  arr.forEach(function (arg) {
    if (Array.isArray(arg))
      obj[toCamelCase(arg[0])] = arg[1];
  });

  return obj;
};

var toCamelCase = function(str) {

  if (typeof str !== 'string')
    return new Error('Argument must be of type String');

  return str.trim().toLowerCase().replace(/[_\s](.)/g, function(match, letter) {
    return letter.toUpperCase();
  });
};

module.exports = {
  arrayToObject: arrayToObject,
  toCamelCase: toCamelCase
};
