'use strict';

function sum(a, b, c) {
  return a + b + c;
}
// function multi(a, b, c) {
//   return a * b * c;
// }

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...newArgs) {
      return curried.apply(this, args.concat(newArgs));
    };
  };
}

const curriedSum = curry(sum);
//const curriedMulti = curry(multi);

console.log(curriedSum(2, 3, 4));
console.log(curriedSum(2)(3)(4));

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

const lg = createLog(10);

console.log(lg(5));

const partial =
  (fn, ...x) =>
  (...args) =>
    fn(...x.concat(args));

const sum4 = (a = 0, b = 0, c = 0, d = 0) => a + b + c + d;
const f11 = partial(sum4, -100);
console.log(f11(10));
const f12 = partial(f11, 100);
const f13 = partial(f12, 200);
const y1 = f13(4);
console.log(y1);

const f21 = partial(sum4, 1, 2);
// const f22 = partial(f21, 3, 4);
console.log(f21(3, 4));
// console.log(f11(2, 3));

//Каррирование

const curry2 =
  fn =>
  (...args) => {
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry2(f);
    } else {
      return fn(...args);
    }
  };

function sum2(a, b, c) {
  return a + b + c;
}

const f = curry2(sum2);

console.log(f(2)(3)(3));

//Мы карируем функцию sum, после чего она возвращает нам, функцию curried,
/*При вызове, карированной функции, у нас есть контекст,
в котором видна та функция которую передавали,
если при вызове мы передаем в рест оператор
недостаточно аргументов, для вызова функции сразу, то мы добавим через bind,
аргументы к нашей функции и рекурсивно вызовем карирование,
в которую попадет наша  новая функция с уже заготовленными аргументами
и тут же вернет нам функцию curried,
после чего мы сможем опять вызвать эту функцию,
и получить контекст уже на функции с добавленным аргументом через bind
все это будет происходить до тех пор
пока количество передаваемых аргументов в функцию curried,
будет меньше чем количество оставшихся свободных аргументов функции fn,
как только это будет не так, вызовется функция fn
с теми аргументами которые уже есть
(при вызове мы их не указываем, потому что они уже находятся там),
и теми которые мы передали в последний раз
*/
const curry3 = (fn, ...par) => {
  const curried = (...args) =>
    fn.length > args.length ? curry3(fn.bind(null, ...args)) : fn(...args);
  return par.length ? curried(...par) : curried;
};

function sum3(a, b, c) {
  return a + b + c;
}

const f2 = curry3(sum3);

console.log(f2(2, 3));

const sum5 = (a, b, c, d) => a + b + c + d;

function MyCarry(fn, ...parametrs) {
  const curried = (...args) =>
    fn.length > args.length ? MyCarry(fn.bind(null, ...args)) : fn(...args);
  return parametrs.length ? curried(...parametrs) : curried;
}

const SumCury = MyCarry(sum5);

console.log(SumCury(2)(3)(4, 5));

const power = (exp, n) => Math.pow(n, exp);
const square = num => Math.pow(num, 2);
const cube = power.bind(null, 3);
console.log(power(2, 2));
console.log(square(3));
console.log(cube(3));

/*Создается функция которая определяет тип кофе,
а точнее объем, и возвращает функцию, которая ожидает на вход крепкость,
после чего мы просто передаем туда крепкость и нам выводит, по сути да,
функция defineCoffeeType является похожей на конструктор,
но все равно задание немного странное
*/
const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = volume => strength => coffee(volume, strength);

const espresso = defineCoffeeType(50);
const americano = defineCoffeeType(150);

console.log(espresso('strong'));
console.log(americano('medium'));

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = str => tagged(new Date(), str);

console.log(tagDate('Danil'));

//Функциональное наследование
/*Как я понимаю функциональное наследование отличается
от прототипного, как минимум тем,
что мы имеем замыкание, а функция конструктор, дает нашему
объекту свойства которые меняют значения в замыкание,
 потому что сам объект поле enabled не имеет */
function Machine() {
  let enabled = false;
  this.enable = function () {
    enabled = true;
  };

  this.disable = function () {
    enabled = false;
  };
  this.say = function () {
    console.log(enabled);
  };
}

Machine.prototype.saysay = function () {
  console.log(this.enabled);
};
const Test1 = new Machine();

Test1.enable();
Test1.say();
Test1.disable();

Test1.saysay();

const Machine2 = () => {
  let count = 0;
  let enabled = false;
  const obj = {};
  obj.enable = function () {
    count++;
    console.log(count);
    enabled = true;
  };
  obj.disable = function () {
    count++;
    console.log(count);
    enabled = false;
  };
  obj.say = function () {
    console.log(++count, enabled);
  };
  return obj;
};

const Test2 = Machine2();
const Test3 = Machine2();
Test2.say();
Test2.enable();
Test2.say();
Test2.disable();
Test2.say();

Test3.say();
Test3.enable();
Test3.say();
Test2.disable();
Test2.say();

//Use method bind() to existing function to apply
//preceding arguments and obtain a new function.

// const module2 = {
//   x: 42,
//   getX() {
//     return this.x;
//   }
// };

// const unboundGetX = module2.getX;
// console.log(unboundGetX());
// // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module2);
// console.log(boundGetX());
// // expected output: 42

const H = (exp, ...args) => {
  const sum = args.reduce((s, a) => s + Math.pow(a, exp), 0);
  const avg = sum / args.length;
  return Math.pow(avg, 1 / exp);
};

// Use method bind() to create new functions from function H.
// Create function `average` that returns arithmetic mean (H₁) of the arguments.
// Create function `rootMeanSquare` that returns quadratic mean (H₂).

const average = H.bind(null, 1);
const rootMeanSquare = H.bind(null, 2);

console.log(average(1, 2, 3));
console.log(rootMeanSquare(1, 2, 3));
console.log(H(2, 1, 2, 3));

//Implement one-argument function that passes its argument
// to another function and returns an object which has the same function:

const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const password = [];
const press = a => {
  const obj = {};
  obj.press = press;
  password.push(a);
  if (checkPin(...password)) return true;
  return obj;
};

console.log(press(4).press(9).press(6).press(7) === checkPin(4, 9, 6, 7));
const a = [1, 2, 3, 4].join('');
console.log(a);
