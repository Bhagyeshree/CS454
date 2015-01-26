var app = require('./app');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage --file [file.txt]')
  .boolean('file', {
    describe: 'List of files to word count.',
  })
  .argv;

if (flags.file) {
  // flags._ - contains the array of files names that we pass in
  app.run(flags._);
}