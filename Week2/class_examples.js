////////////////////////////////////////////////////
// SCOPE
///////////////////////////////////////////////////


var greeting = 'hello'; // global scopr

function greet() {
  var name = 'cyd'; // local scope
  return greeting + ' ' + name;
}
console.log(greet());



////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////
function contextFn(){
  // logs the 'this' object in javascript
  return console.log(this);
}
contextFn();

var obj = {
  x: 10,
  y: 10,
  const: function() {
    var x = 5;
    var y = 5;
      // refer to the obj.x and obj.y(10)
    console.log(this.x + this.y);
  },
  math: {
    x: 5,
    y: 5,
    modX: function() {
      // refer to the math.x (5)
      console.log(this.x % 2)
    },
    modY: function() {
      // refer to the math.y (5)
      console.log(this.y % 2)
    }
  }
}



////////////////////////////////////////////////////
// CLOSURES
///////////////////////////////////////////////////
function adder() {
  var x = 5;
  return function(y) {
    return x + y;
  }; // closure
}

var add5 = adder();
var add10 = adder();

console.log(add5(5));  // 7
console.log(add10(10)); // 12


// JavaScript does not provide a way of declaring method private.
// It is possible to emulate private methods using closures. 
var keyGen = function() {
  var key = 'keyword is... ';

  function addLetter(letter) {
    key += letter;
  }

  return {
    typeA: function() {
      addLetter('a');
    },
    typeC: function() {
      addLetter('c');
    },
    typeT: function() {
      addLetter('t');
    },
    getKey: function() {
      return key;
    }
  };
};

var secret = keyGen();
secret.typeC();
secret.typeA();
secret.typeT()
console.log(secret.getKey());



////////////////////////////////////////////////////
// OBJECTS
///////////////////////////////////////////////////
function Animal(name, color, sound) {
  this.name = name;
  this.type = color;
  this.sound = sound;
}

var dog = new Animal('fido', 'grey', 'woof');
var cat = new Animal('garfield', 'orange', 'feed me lasagna');
console.log(dog);
console.log(cat);

Animal.prototype.speak = function() {
  console.log(this.sound);
}

cat.speak();
dog.speak();

Animal.prototype.doTrick = function() {
  var random = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  console.log(this.name + ' ' + random)
}

dog.tricks = ['sits', 'begs', 'plays dead', 'rolls over'];
dog.doTrick();


//call() accepts an argument list
function Mythical(name, color, sound, power) {
  Animal.call(this, name, color, sound);
  this.power = power;
};

// mythical inherits from animal
Mythical.prototype = Object.create(Animal.prototype);

var dragon = new Mythical('smog', 'green', 'roar', 'firebreathing');
console.log(dragon);
dragon.speak();


Mythical.prototype.superpower = function() {
  console.log(this.name + ' has ' + this.power);
}
dragon.superpower();


///////// STRING
function addSpaces(str) {
  return str.split('').join(' ');
}
String.prototype.addSpaces = function(){
  return this.split('').join(' ');
};

///////// ARRAY
var arr = [1, 2, 3, 'hello', 1, 3, 'another'];
var arr = [1, 2, 3];

Array.prototype.exclude = function(type) {
  var self = this;

  this.forEach(function(arg) {
    if (typeof arg == type) {
      var index = self.indexOf(arg);
      self.splice(index, 1)
    }
  });
  return this;
}


////////////////////////////////////////////////////
// CALLBACKS
///////////////////////////////////////////////////

function genRandom(n1, n2, callback) {
  var my_number = Math.floor(Math.random() * n1) + n2;
  callback(my_number);
}

genRandom(10, 1, function done(result) {
  console.log(result);
  console.log('hello world');
});




// The core of JavaScript is largely synchronous, in that functions 
// complete their task fully, before completing.
// Only setTimeout and setInterval provide asynchronous behavior.

////////////////////////////////////////////////////
// EVENTLOOP
///////////////////////////////////////////////////
console.log("Hello!");

setTimeout(function () {
  console.log("BUT setTimeout is asynchronous!");
}, 300);

console.log("JavaScript is largely synchronous");


/// Async Callbacks
function makeFood(food, time, callback) {
  setTimeout(function() {
    callback(food + ' is ready');
  }, time);
}

makeFood('pizza', 10, function(result) {
  console.log(result);
});
makeFood('burger', 10, function(result) {
  console.log(result);
});
makeFood('spaghetti', 10, function(result) {
  console.log(result);
});





