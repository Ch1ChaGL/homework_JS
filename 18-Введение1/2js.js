'use strict';

const MAX_VALUE = 10;

console.log('begin');
for (let i = 0; i < MAX_VALUE; i++) {
  console.dir({ i, date: new Date() });
}
console.log('the end');


const add = (a, b) => a + b;
console.log('Add numbers : 5+2 = ' + add(5, 2));
console.log('concatenate : \'5\'+\'2\' = ' + add('5', '2'));
console.log('subtraction : 5 - 2 = ' + add(5, -2));
123;
