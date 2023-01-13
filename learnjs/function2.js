'use strict';


const user = {
  firstName: 'Вася',
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

//setTimeout(user.sayHi, 1000); // Привет, undefined!
/*Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта
user (именно здесь функция и потеряла контекст).  */


//Решение 1 - это обернуть вызов в анонимную функцию, создав замыкание

setTimeout(()  => {
  user.sayHi();
}, 1000);


//2 Привязка контекста с помощью bind

const user2 = {
  firstName: 'Вася',
  sayNihao() {
    console.log(this.firstName + 'NIHAO');
  }
};


function vasia() {
  console.log(this.firstName + '   Function vasia');
}
user2.sayNihao();

const vasiaBound = vasia.bind(user2);

vasiaBound();


const sayHiwithMethod = user2.sayNihao.bind(user);

//Эта функции теперь может быть вызвана отдельно
sayHiwithMethod();

//В отличие от этого
/*
const test = user2.sayNihao;
test();
 */


//но можно привязать сразу к методу
user2.sayNihao = user2.sayNihao.bind(user2);
//И тогда будет работать
const test = user2.sayNihao;
test();



//Код для всех методов объекта, если их часто надо передавать

for (const key in user2) {
  if (typeof user[key] === 'function') {
    user[key] = user[key].bind(user);
  }
}



function mul(a, b) {
  return a * b;
}


//Частичное применение, не так много пояснений как у тимура, но нормик
const double = mul.bind(null, 2);

console.log(double(2));
console.log(double(3));
console.log(double(4));
console.log(mul(2, 3));


const user3 = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};


function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

user3.sayNow = partial(
  user3.say, new Date().getHours() + ':' + new Date().getSeconds());



user3.sayNow('Hello');

//Можно создать также метод частичный для другого
//похожего объекта, используя метод другого объекта
user2.sayNow = partial(
  user3.say, new Date().getHours() + ':' + new Date().getSeconds());

// user2.sayNow('Hello');
// setTimeout(() => user3.sayNow('Hi'), 5000);


//Еще можно так
const test2 = partial(
  user3.say, new Date().getHours() + ':' + new Date().getSeconds());

test2.call(user2, 'TEST');




const worker  = {
  name: 'worker',
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log(this.name + ' ' + x);
  }
};


function cachingDecorator(func) {
  const cache = new Map();
  return function(...args) {
    const key = [...args];
    if (cache.has(key)) return cache.get(key);
    const result = func.call(this, ...args);
    cache.set(key, result);
    return result;
  };
}

const Danil = {
  name: 'danil',
};


const newTest = cachingDecorator(worker.slow);

newTest.call(Danil, ' = 2'); // danil = 2






function hello() {
  console.log('hello', this);
}

hello();

const testPerson = {
  name: 'test',
};

const person = {
  name: 'danil',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(testPerson),
  logInfo(job) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`job is ${job}`);
  }
};


const lena = {
  name: 'Lena',
  age: 24
};
person.sayHello();
person.sayHelloWindow();


person.logInfo.bind(lena)();


//Передать значение через bind
person.logInfo.bind(lena, 'Повар')();



//Метод call сразу вызывает функцию
person.logInfo.call(lena, 'повар');



//метод apply
person.logInfo.apply(lena, ['Повар']);






const worker2 = {
  name: 2,
  someMethod() {
    return 2;
  },

  slow(x) {
    console.log('Called with ' + x);
    return x * this.someMethod(); // (*)
  }
};
const worker3 = {
  name: 3,
  someMethod() {
    return 3;
  },

  slow(x) {
    console.log('Called with ' + x);
    return x * this.someMethod(); // (*)
  }
};


function cachingDecorator2(func) {
  const name = this;
  const cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    const test = this;
    const result = func.call(this, x); // теперь 'this' передаётся правильно
    cache.set(x, result);
    return result;
  };
}

console.log(worker2.slow);
worker2.slow = cachingDecorator2(worker3.slow);

console.log(worker2.slow(2));
console.log(worker3.slow(1));
console.log(worker2.slow);
