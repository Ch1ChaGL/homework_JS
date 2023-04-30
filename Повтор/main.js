'use strict';

const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last)
          return { done: false, value: this.current++ };
        else return { done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num);
}

const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const doublePrice = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrice.meat);

// const curry = (fn, ...par) => {
//   const curried = (...args) =>
//     fn.length > args.length ? fn(...args) : curry(fn.bind(null, ...args));
//   return par.length ? curried(...par) : curried;
// };

function hello(name) {
  return count => console.log(`Hello ${name} : ${count}`);
}

const count = hello('Danil');

count(3);

function sayHi(pharse, who) {
  console.log(pharse, who);
}

setTimeout(sayHi, 3000, 'Danil', 'Hello');

const user = {
  name: 'Jhon',
};

const descriptor = Object.getOwnPropertyDescriptor(user, 'name');

/**
 * Функция показывает мое имя
 * @param {string} name мое имя
 * @param {number | string} age мой возраст
 * @return {void} в консоль печатается имя
 */
const sayHi2 = (name, age) => {
  console.log(name, age);
};

sayHi2('Danil', 19);

/**
 * Абстрактный класс Animal
 */
class Animal {
  constructor(name, age) {
    if (this.constructor.name === 'Animal') {
      throw new Error(
        `${this.constructor.name}: can't create instance of abstract class`,
      );
    }
  }
}

//const cat = new Animal('Garage', 3); --Ошибка

/**
 * Функция конструктор
 * @param {string} type
 * @param {string} name
 * @param {string | number} age
 */
function Transport(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;

  this.what = () => {
    console.log(type, name, age);
  };
}

Transport.prototype.GetName = function () {
  console.log(this.name);
};

const car = new Transport('car', 'Lada', '10');
car.what();
car.GetName();

const prom = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done!'), 1000);
});

prom
  .then(data => {
    console.log(data);
    return 13;
  })
  .then(num => console.log(num));

/**
 * Промисификация - Функция обертка
 * @param {callback} fn асинхронная функция без аргументов
 * @returns Функция вызова асинхронной функции
 * с выполнением контракта error-first callback
 */
const promisify =
  fn =>
  /**
   * Вызов асинхронной функции
   * @param  {...any} args аргументы асинхронной функции
   * @returns Promise
   */
  (...args) =>
    new Promise((resolve, reject) => {
      args.push((err, value) => {
        if (err) reject(value);
        else resolve(value);
      });
      fn(...args);
    });

async function f() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('готово!'), 1000);
  });

  const result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f().then(() => console.log('Done'));

//Генераторы

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generator = generateSequence();
const one = generator.next();

console.log(one);

const range2 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

for (const iterator of range2) {
  console.log(iterator);
}

const range3 = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      // пауза между значениями, ожидание
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  },
};

(async () => {
  for await (const value of range3) {
    console.log(value);
  }
})();



