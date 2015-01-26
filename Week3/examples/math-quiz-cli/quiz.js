var inquirer = require('inquirer');

var quizzes = {
  easy: {
    min: 1,
    max: 10,
    operators: ['+', '-']
  },
  hard: {
    min: 1,
    max: 20,
    operators: ['+', '-', '*', '/', '%']
  }
};

module.exports.run = function(difficulty) {
  var quiz = new Quiz(quizzes[difficulty])
  quiz.init();
}

function Quiz(quiz) {
  this.min = quiz.min;
  this.max = quiz.max;
  this.operators = quiz.operators;
};

Quiz.prototype.init = function() {
  var n1 = Math.floor(Math.random() * this.max) + this.min;
  var n2 = Math.floor(Math.random() * this.max) + this.min;
  var op = this.operators[Math.floor(Math.random() * this.operators.length)];

  this.question = { n1: n1, n2: n2, op: op };
  
  this.displayQuiz();
}

Quiz.prototype.getSolution = function() {

  switch (this.question.op) {
    case '+':
      return this.question.n1 + this.question.n2;
      break;
    case '-':
      return this.question.n1 - this.question.n2;
      break;
    // TODO implement other math methods: * / %
    default:
      console.log('No method implemented')
  }
}

Quiz.prototype.displayQuiz = function() {
  var self = this;

  inquirer.prompt([{
    type: 'input',
    name: 'answer',
    message: this.question.n1 + ' ' + this.question.op + ' ' + this.question.n2 + ' =',
  }], function(input) {
    self.isRight(input.answer);
  });
}

Quiz.prototype.isRight = function(answer) {
  var solution = this.getSolution(this.question);
  if (answer == solution) {
    console.log('YAY!')
  } else {
    console.log('Sorry! The answer is ' + solution);
  }

  this.playAgain()
}

Quiz.prototype.playAgain = function() {
  var self = this;

  inquirer.prompt([{
    type: 'confirm',
    name: 'answer',
    message: '\nDo you want to play again?',
  }], function(input) {

    if (input.answer) {
      var quiz = new Quiz({min: self.min,  max: self.max, operators: self.operators});
      quiz.init();
    } else {
      console.log('Goodbye');
    }

  });
}