'use strict';


const user = {
  name: 'Danil',
  lastName: 'Markov',
  age: 18,
};
//Повторение прошлых тем
{
  const user2 = {
    name: 'Danil2',
    lastName: 'Markov2',
    age: 18,
    [Symbol.iterator]() {
      return {
        current: 0,
        last: Object.keys(this).length,
        values: Object.values(this),
        keys: Object.keys(this),
        next() {
          if (this.current < this.last) {
            return { done: false, value: [this.keys[this.current],
              this.values[this.current++]] };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  const objTest = Object.fromEntries([['name', 'Danil3'], ['age', 18]]);

  for (const key in objTest) {
    console.log(objTest[key]);
  }

  //if (this.current <= this.last) {
  //             return { done: false, value: this.current++ };
  //           } else { return { done: true }; }
  for (const [key, value] of user2) {
    console.log(key, value);
  }
}

///////
function iterate(obj, callback) {
  for (const [value, key] of Object.entries(obj)) {
    callback(value, key);
  }
}


iterate(user, (value, key) => {
  console.log(value, key);
});




const store = num => {
  const value = num;
  return function() {
    return `${value}`;
  };
};

const read = store(500);

const value = read();

console.log(value);



//3

const contract = (fn, ...type) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const typeFn = type[i].name.toLowerCase();
    const argument = args[i];
    if (typeof argument !== typeFn)
      throw new TypeError(`Argument type ${typeFn} expected`);
  }
  const res = fn(...args);
  const typeFn = type[type.length - 1];
  const typeName = typeFn.name.toLowerCase();
  if (typeof res !== typeName)
    throw new TypeError(`Argument type ${typeName} expected`);
  return res;
};


const sum = (...args) => args.reduce((a, b) => a + b);


const sumNum = contract(sum, String, String, String);

console.log(sumNum('2', '3'));
