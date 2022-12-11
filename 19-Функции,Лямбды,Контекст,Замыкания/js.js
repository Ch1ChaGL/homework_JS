'use strict';

function inc(a) { //Function decloration
  return a + 1;
}
inc(4);

const sum = function(a, b) {    //Function expresion
  return a + b;
};
sum(3, 4);

const max = (a, b) => (a > b ? a : b);//Лямбда функция/arrow function expresion
max(3, 4);


const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};
console.log(avg(4, 5));


const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Moskov', 'Riga'];
const f = s => s.lenght;
for (const props in cities) {
  f(props);
}
function f1() {

  const cities = ['athens', 'Roma'];
  const f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));
  {
    const f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }
  {
    const cities = ['London', 'Beijing', 'Moskov'];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

f1();


//Hash style for default parameter values
//
function fnHash(args) {
  args.a = args.a || [2, 3, 4];
  args.b = args.b || 'Привет';
  args.c = args.c || 100;
  return args;
}
console.dir(fnHash({ a: [2, 4, 6], c: 322 }));


//rest operator
//

const f2 = (...args) => {
  console.log(args);
};
f2(3, 4, 5);

// array1.forEach(element => console.log(element)); !!!!
//Метод JSON.stringify()преобразует значение JavaScript в строку JSON
const f3 = (...args) => {
  args.forEach(itemArray => {
    console.log('Type: ' + typeof itemArray);
    if (typeof itemArray === 'object') {
      console.log('Vlaue: ' + JSON.stringify(itemArray));
    } else {
      console.log('Value: ' + itemArray);
    }
  });
};


f3('123', 123, [1, 3, 4,], { a: 34, b: 45 }, fnHash({}));



//Редкая инициализация функции

const sum2 = new Function('a,b', 'return a+b');

console.log(sum2(2, 3));

const powName = 'pow';
const obj1 = {
  fn1: function inc(a) {
    return ++a;
  },
  sum(a, b) {
    return a + b;
  },
  max: (a, b) => (a > b ? a : b),
  [powName](a, b) {
    return Math.pow(a, b);
  },
  show() {
    console.log(this.fn1.name);
    console.log(this.sum.name);
    console.log(this.max.name);
    console.log(this[powName].name);
    console.log(this.show.name);
  }
};

obj1.show();

//Immediately-invoked function expression (IIFE) "Немедленно вызываемая"
(function ftest() {
  console.log('ftest');
})();


function f4(a, b) {
  console.log('f4(' + a + ',' + b + ')');
}
f4(2, 3);
f4.call(null, 2, 3);
//На месте null, может лежать объект, и при передаче его
//В функцию, сама функция получить объектный контекст переданного объекта


const arr = [2, 4, 3];
f4(...arr);     //Spread syntax
// f4.apply(null, arr); Ругается линтер на такую строчку

//Контекст

//Замыкание
/* Функция Hash имеет объект data и счетчик, она же возвращает
функцию стрелку, при вызове функции Hash, мы можем присвоить ссылку на
функцию стрелку, которая в свою очередь может видеть все что происходит сверху,
и изменять эти данные*/
const Hash = () => {
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data;
  };
};

const h1 = Hash();
const h2 = Hash();
console.log(h1 === h2); //False
h1('name', 'Marcus');
h1('city', 'roma');
const obj2 = h1('born', 123);
console.dir({ obj2 });
h1(123, 123);
console.dir({ obj2 });

const obj3 = h2('Danil', 'MArkov');
console.dir({ obj3 });

console.log(h1 === h2); //False


//chain

{
  const Hash = () => {
    const data = {};
    //Тот объект у которого надо создать поле,
    //потом его поле,значение равно функции
    Object.defineProperty(data, 'add', {
      enumerable: false,
      value(key, value) {
        data[key] = value;
        return data;
      }
    });
    return data;
  };
  console.dir(Hash().add('name', 'marcus').add('city', 'Roma'));
}
