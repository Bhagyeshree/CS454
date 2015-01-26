var list = [1, 2, 3];
console.log(list);
console.log(list[0]);

var greetings = [];

greetings.push('hello');
greetings.push('hey', 'howdy');
console.log(greetings);

//using a for loop
for (i = 0; i < greetings.length; i++) {
  console.log(greetings[i]);
}

//using the forEach method provided by Array
greetings.forEach(function(word) {
  console.log(word);
});

console.log(greetings);
console.log(greetings.join(' | '));

console.log(greetings.pop());
console.log(greetings);

