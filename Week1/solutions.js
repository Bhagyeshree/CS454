// #1 - Reflection
console.log('HW1 - Question 1 - Solution')

function reflection(s) {
  var reflect = '';

  for (var i = s.length - 1; i >= 0; i--) {
    reflect += s[i];
  };
  console.log(s + ' ' + reflect);
}
reflection('hello');
console.log('')


// #1 - Reflection - Alternate
console.log('HW1 - Question 1 - Alternate Solution')
function reflection2(s) {
  var reflect = s.split('').reverse().join('');
  console.log(s + ' ' + reflect);
}
reflection2('hello');
console.log('')


// #2 - Pattern
console.log('HW1 - Question 2 - Solution')
function pattern(start, end, spread) {
  var sequence = [];
  for (var i = start; i <= end; i += spread) {
    sequence.push(i);
  }
  console.log(sequence)
}
pattern(2, 10, 2);
console.log('')


// #3 - Add All
console.log('HW1 - Question 3 - Solution')
function addAll(arr) {
  var total = 0;

  arr.forEach(function (n) {
    total += n;
  });
  console.log(total)
}
addAll([1, 3, 4, 6, 2, 0, 4, 7, 8]);
console.log('');


// #4 - FooBar
console.log('HW1 - Question 4 - Solution')
function fooBar() {
  for (var n = 1; n <= 100; n++) {

    if (n % 3 == 0 && n % 7 == 0) {
      console.log('FooBar');
    } else if (n % 3 == 0) {
      console.log('Foo');
    } else if (n % 7 == 0) {
      console.log('Bar');
    } else {
      console.log(n);
    }
  }
}
fooBar();
console.log('');

// #5 - Add All
console.log('HW1 - Question 3 - Solution')
function objectSize(obj) {
  var size = 0;

  for(var key in obj) {
    size++
  }

  console.log(size);
}
var dog = {
  name: 'Snoopy',
  owner: 'Charlie Brown',
  friend: 'Woodstock'
};
objectSize(dog);
console.log('');


// #6 - Dinner Array
console.log('HW1 - Question 5 - Solution')
function tipCalculator(dinner, tip) {
  var result = { total: '', customers: [] };
  var accum = 0;

  dinner.forEach(function (person) {
    var paid = Math.floor(person.bill * (tip/100 + 1));
    accum += paid;
    result.customers.push({ name: person.name, paid: paid.toFixed(2) })
  });
  result.total = accum.toFixed(2);

  console.log(result);
};

var dinner = [
  { name: 'Cyd', bill: 22.54 },
  { name: 'Andrea', bill: 18.39 },
  { name: 'Andy', bill: 15.29 },
  { name: 'Stevi', bill: 25.11 }
];
tipCalculator(dinner, 20);
console.log('');



// #6 - Fibonacci
console.log('HW1 - Question 5 - Solution')
var series = [];
function fibonacci(n) {
  if (n == 2) {
    series.push(0, 1);

    return series;
  }
  else {
    var next = n - 1;
    getFibonacci(next);

    var first = series.length - 1;
    var second = series.length - 2;
    series.push(series[first] + series[second]);

    return series;
  }
};

function getFibonacci(n) {
  var result = fibonacci(n);
  console.log(result);
}
getFibonacci(20);


















