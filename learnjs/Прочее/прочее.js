'use strict';

//eval
const code = 'console.log("Привет")';
eval(code);


//Результатом eval будет результат выполнения последней инструкции.

const value = eval('let i = 0; ++i');
console.log(value); // 1


const a = 1;

function f() {
  const a = 2;

  eval('console.log(a)'); // 2
}

f();


// eslint-disable-next-line prefer-const
let x = 5;
eval('x = 10');
console.log(x);


const calculator = MathExp => console.log(eval(MathExp));


calculator('2+3');

//Карирование

function curry(fn, ...par) {
  const  curried = (...args) => {
    if (fn.length > args.length)
      return curry(fn.bind(null, ...args));
    else
      return fn(...args);
  };
  return par.length ? curried(...par) : curried;
}


const sum = (a, b, c) => a + b + c;


const curriedSum = curry(sum);


curriedSum(2)(3)(4);

//Ссылочный тип
const user =  {
  name: 'Danil',
  hi() {
    console.log(this.name, 'hello');
  }
};


const hi = user.hi.bind(user);

hi();


const collator  = new Intl.Collator();

const animals = ['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК'];

animals.sort((a, b) => collator.compare(a, b));


console.log(animals);
