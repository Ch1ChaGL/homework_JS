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
    return function(...newArgs) {
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


const partial = (fn, ...x) => (...args) => fn(...x.concat(args));

const sum4 = (a = 0, b = 0, c = 0, d = 0) => (a + b + c + d);
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

const curry2 = fn => (...args) => {
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
  const curried = (...args) => (
    fn.length > args.length ?
      curry3(fn.bind(null, ...args)) :
      fn(...args)
  );
  return par.length ? curried(...par) : curried;
};


function sum3(a, b, c) {
  return a + b + c;
}

const f2 = curry3(sum3);

console.log(f2(2, 3));



const sum5 = (a, b, c, d) => a + b + c + d;


function  MyCarry(fn, ...parametrs) {
  const curried = (...args) => (
    fn.length > args.length ?
      MyCarry(fn.bind(null, ...args)) :
      fn(...args)
  );
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


const Machine = () => {


};
