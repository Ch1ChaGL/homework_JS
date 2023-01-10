'use strict';

// function ask(question, ...handlers) {
//   const isYes = confirm(question);

//   for (const handler of handlers) {
//     if (handler.length === 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }

// }

// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
//ask('Вопрос?', () => alert('Вы ответили да'), result => alert(result));


function sayHi() {
  console.log('Hi');
  sayHi.counter++;
}

sayHi.counter = 0;
sayHi();
sayHi();

console.log(sayHi.counter);



function makeCounter() {
  function counter() {
    console.log(counter.count);
    counter.count++;
  }
  counter.count = 0;

  return counter;
}


const test = makeCounter();
const test2 = makeCounter();
test();
test2();
test();
test2();
test();
test2();



//Named Function Expression

const sayHiWithNFE = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else func('Anonim');
};


sayHiWithNFE();
sayHiWithNFE('Danil');


function makeCounterNew() {
  function counter() {
    console.log(counter.count);
    counter.count++;
  }
  counter.count = 0;
  counter.set = function(num) {
    counter.count = num;
  };
  counter.decrease = function() {
    counter.count--;
  };

  return counter;
}

const test3 = makeCounterNew();
const test4 = makeCounterNew();

test3();
test4();
test3();
test4();
test3();
test4();

test3.set(10);
test3();

test4.set(-10);
test4();

test3.decrease();
test3.decrease();
test3();

test4.decrease();
test4.decrease();
test4();

function makeCounterNew2() {
  let count = 0;
  function counter() {
    return count++;
  }

  counter.set = value => count = value;
  counter.decrease = () => count--;
  counter.show = () => console.log(count);

  return counter;
}


const test5 = makeCounterNew2();
const test6 = makeCounterNew2();

test5.set(5);
test5();
test5.decrease();
test5.show();


test6();
test6();
test6();
test6();

test6.show();


function sum(num) {
  let currentSum = num;

  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };

  return f;
}


function sum2(num) {
  let currentSum = num;
  function summing(num2) {
    currentSum += num2;
    return summing;
  }
  summing.toString = () => `value = ${currentSum}`;

  return summing;

}

console.log((sum(2)(3)(4)) + '');

console.log((sum2(2)(3)(4)) + '');




//Планирование setTimeout setInterval

/*setTimeout позволяет вызвать функцию
один раз через определённый интервал времени.
setInterval позволяет вызывать функцию регулярно,
повторяя вызов через определённый интервал времени. */


//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);

/*Параметры:

func|code
Функция или строка кода для выполнения.
Обычно это функция. По историческим причинам можно передать
и строку кода, но это не рекомендуется.
delay
Задержка перед запуском в миллисекундах (1000 мс = 1 с).
Значение по умолчанию – 0.
arg1, arg2…
Аргументы, передаваемые в функцию */


function sayHiTimeout() {
  console.log('Привет');
}
function sayHiTimeout2(phrase, who) {
  console.log(phrase + ' ' + who);
}

setTimeout(sayHiTimeout, 1000);
setTimeout(sayHiTimeout2, 999, 'Пока', 'Данил');

console.log('-------------------');
const timerId = setTimeout(() => console.log('Ничего не происходит'), 1000);
console.log(timerId + '');

clearTimeout(timerId);
console.log(timerId + '');



//const interval = setInterval(() => console.log('Привет'), 2000);

let count = 0;
let interval2 = setTimeout(
  function run() {
    count++;
    console.log('Я задерживаюсь');
    interval2 = setTimeout(run, 3000);
    if (count === 2) {
      clearInterval(interval2);
    }
  }
  , 1000);



setTimeout(() => console.log('C нулевой задержкой'), 0);

console.log('1');
console.log('2');
console.log('3');



const start = Date.now();
const times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

  if (start + 1000 < Date.now()) console.log(times);
  // показываем задержку через 100 мс

  else setTimeout(run); // если нужно ещё запланировать
});




// function printNumbers(from, to) {
//   let current = from;
//   const interval3 = setInterval(() => {
//     console.log(current);
//     if (current === to) clearInterval(interval3);
//     current++;
//   }, 1000);
// }


// printNumbers(1, 5);


// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function run() {
//     console.log(current);
//     current++;
//     const interval2 = setTimeout(run, 1000);
//     if (current - 1 === to) {
//       clearInterval(interval2);
//     }

//   }, 1000);
// }


// printNumbers(1, 5);


function printNumbers(from, to) {
  let current = from;
  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}


printNumbers(1, 5);


let i = 0;

//setTimeout(() => alert(i), 100);
// 100000000 , потому что вызовется после цикла

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}




//Декораторы и переадресация вызова, call / apply



function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}



function cachingDecorator(func) {
  const cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func(x);
    cache.set(x, result);
    return result;
  };
}


const slowDec = cachingDecorator(slow);

console.log(slowDec(1));
console.log('Again: ' + slowDec(1));
console.log(slowDec(2));
console.log('Again: ' + slowDec(2));



const sum5 = function(args) {
  return args.reduce((x, y) => x + y);
};

const sumDec = cachingDecorator(sum5);

console.log(sumDec([2, 3]));




const worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // здесь может быть страшно тяжёлая задача для процессора
    console.log('Called with ' + x);
    return x * this.someMethod(); // (*)
  }
};



function sayHi2() {
  console.log(this.name);
}

const user = { name: 'John' };
const admin = { name: 'Admin' };

// используем 'call' для передачи различных объектов в качестве 'this'
sayHi2.call(user); // John
sayHi2.call(admin); // Admin



function cachingDecorator2(func) {
  const cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func.call(this, x);
    cache.set(x, result);

    return result;
  };
}


worker.slow = cachingDecorator2(worker.slow);



console.log(worker.slow(2));

console.log(worker.slow(2));



function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}


const test10 = (a, b) => a + b;

const test10spy = spy(test10);

console.log(test10spy(1, 2));
console.log(test10spy(3, 4));


for (const args of test10spy.calls) {
  console.log('call:' + args.join());
}



function delay(func, time) {

  function wrapper(...args) {
    setTimeout(() => func.apply(this, args), time);
  }
  return wrapper;
}


function hello(x) {
  console.log(x);
}


const delayHello = delay(hello, 5000);

delayHello('Привет');



function debounce(f, ms) {
  let flag = false;
  return function(...args) {
    if (flag) return;
    f.apply(this, args);
    flag = true;
    setTimeout(() => flag = false, ms);
  };
}




function throttle(func, ms) {
  let isThrotled = false,
    savedArgs,
    savedThis;
  function wrapper(...args) {
    if (isThrotled) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrotled = true;
    setTimeout(() =>  {
      isThrotled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}







