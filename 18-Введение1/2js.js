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


const welcome = person => {
  console.log(`Ave,${person.name}!`);
};

const persons = [
  { name: 'Marcus Aurelius' },
  { name: 'Mao Zedong' },
  { name: 'Rene Descartes' },
];

for (const person of persons) {
  welcome(person);
}


const persons2 = {
  marcus: { name: 'Marcus Aurelius' },
  mao: { name: 'Mao Zedong' },
  rene: { name: 'Rene Descartes' },
};


for (const name in persons2) {
  const person = persons2[name];
  welcome(person);
}


const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add2(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
});


const test = adder(3);
let i = 0;
for (const key in test) {

  test.steps[key] = i++;

}
for (const key in test) {
  const test2 = test.steps[key];
  console.log(test2);
}
console.dir(test.steps);
console.log(test.add2(3));
console.log(test.add2(1));
console.log(test.add2(1));
console.dir(test.steps);
console.log(test);
