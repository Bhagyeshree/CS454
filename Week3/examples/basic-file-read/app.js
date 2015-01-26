var fs = require('fs');

var files = ['large.txt', 'medium.txt', 'small.txt'];

var async = function() {
  var startAsync = new Date();
  var endAsync = 0;

  files.forEach(function(file) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
      if (err) console.log(err);

      var time = 0;
      var wc = data.split(' ').length;

      time = new Date() - startAsync;
      endAsync += time;
      console.log('ASYNC ' + file + ' | word count is ' + wc + 
        ' | time to read current file: ' + time +
        ' | accumulative read time ' + endAsync);
    });
  })
};

var sync = function() {
  var startSync = new Date();
  var endSync = 0;

  files.forEach(function(file) {
    var data = fs.readFileSync(file, { encoding: 'utf8' });
    
    var time = 0;
    var wc = data.split(' ').length;

    time = new Date() - startSync;
    endSync += time;
    console.log('SYNC ' + file + ' | word count is ' + wc +
      ' | time to read current file: ' + time +
      ' | accumulative read time ' + endSync);
  })
};

async();
sync();



