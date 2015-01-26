console.log('undefined is ' + Boolean(undefined));
console.log('null is ' + Boolean(null));
console.log('1 is ' + Boolean(1));
console.log(' is ' + Boolean(''));
console.log('NaN is ' + Boolean(NaN));

// equality
console.log('2' === 2);
console.log('a' === new String('a'));

// strict equality
console.log('2' === 2);
console.log('a' === new String('a'));

console.log(0 == false);
console.log('' == false);
console.log(null == false);
console.log(undefined == false);

var flag = null;

if (flag) {
  console.log('i found a flag');
}
else {
  console.log('no flag found');
}


