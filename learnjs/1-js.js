'use strict';


// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask('Вы согласны?', () => alert('Вы согласилсиь'),
//   () => alert('Вы отменили выполнение'));


// alert('После этого сообщения ждите ошибку');

// [1, 2].forEach(alert);



const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
}
console.log(sum);
sum = 0;


//Object.values() - Хранит дает значение свойств объекта
//Тот же пример с этим свойством
for (const salary  of Object.values(salaries)) {
  sum += salary;
}
console.log(sum);
//Так как этот метод возвращает массив то, можно применить reduce
//Тот же пример с reduce

sum = 0;

sum  = Object.values(salaries).reduce((acum, cur) => acum + cur);
console.log(sum);



const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};


function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.dir(menu);

const id = Symbol('id');
console.log(id.toString());
console.log(id.description);


//4.8 Преобразование объектов в примитивы

// function Person(name, age) {

//   this.name = name;
//   this.age = age;
//   this[Symbol.toPrimitive] = hint => {
//     //hint: 'string' , 'nuber', 'default';
//     if (hint === 'string') return  `Hello, ${this.name}`;
//     return this.age;
//   };
// }

// const Dave = new Person('Dave', 20);
// const Mike = new Person('Mike', 30);
// console.log(Dave + Mike); //50
// console.log(String(Dave)); // Hello, Dave

//Типы данных

// const str = 'Привет';

// console.log(str.test = 5); // (*)

console.log(1.35.toFixed(1));


const str = 'Widget';

if (~str.indexOf('Widget')) { // -1
  console.log('Совпадение есть'); // работает
}
if (~str.indexOf('Widgett')) { //0
  console.log('Совпадение есть'); //не работает
}

console.log('AB'.codePointAt(1));
//Возвращает код элемента строки по заданному индексу

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[Math.floor((arr.length - 1) / 2)]);




//Перебераемые объекты
// {
//   const range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//       return {
//         current: this.from,
//         last: this.to,
//         next() {
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else { return { done: true }; }
//         }
//       };
//     }
//   };
//   for (const num of range) {
//     console.log(num);
//   }
// }


//Попытка повторить самому


// const range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else { return { done: true }; }
//       }
//     };
//   }
// };

// for (const num of range) {
//   console.log(num);
// }


//Реализация итреирования в самомо объекте
// {
//   const range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },
//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };

//   for (const num of range) {
//     console.log(num);
//   }
// }


//Явный вызов итератора

// {
//   const str = 'Hello';
//   const iterator = str[Symbol.iterator]();
//   while (true) {
//     const Result = iterator.next();
//     if (Result.done) break;
//     console.log(Result.value);
//   }

// }


// const arr2 = Array.from(range);
// console.log(arr2);

// const str2 = '𝒳😂𩷶';
// function slice(str, start, end) {
//   return Array.from(str).slice(start, end).join('');
// }
// console.log(str2.slice(1, 3));
// console.log(slice(str2, 1, 3));




const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (const values of range) {
  console.log(values);
  console.log(range.current);
}


const objtest = {
  // a: 13,
  // b: 10,
  c() { console.log('Hi'); },
  d() {},

  // [Symbol.iterator]() {
  //   return {

  //   };
  // }
};


for (const value of Object.values(objtest)) {
  console.log(value);
}
