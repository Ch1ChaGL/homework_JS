'use strict';
const a = 9;
const b = 14;
const c = -9;
const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(a + 'to base 2:' + aBinary);
console.log(b + 'to base 2:' + bBinary);
console.log(c + 'to base 2:' + cBinary);

console.log(a + '&' + b + '=' + (a & b));
console.log(a + '|' + b + '=' + (a | b));
console.log(a + '^' + b + '=' + (a ^ b)); //Исключающее или
