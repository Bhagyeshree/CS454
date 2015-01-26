var fs =require('fs');

module.exports.run = function(files) {
  var startAsync = new Date();
  var endAsync = 0;

  files.forEach(function(file) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
      if (err) console.log(err);

      var time = 0;
      var wc = data.split(' ').length;

      time = new Date() - startAsync;
      endAsync += time;
      console.log(file + ' | word count is ' + wc + 
        ' | time to read current file: ' + time +
        ' | accumulative read time ' + endAsync);
    });
  })
};