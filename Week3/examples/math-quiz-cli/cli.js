var quiz = require('./quiz');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js --run --diff [easy/hard]')
  .options('h', {
    alias: 'help',
    describe: 'Display Help'
  })
  .options('r', {
    alias: 'run',
    describe: 'Run the cli.',
  })
  .options('d', {
    alias: 'diff',
    describe: 'Set the difficulty of the quiz. Ex. easy or hard',
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
  process.exit(0);
}

if (flags.run) {
  quiz.run(flags.diff);
}