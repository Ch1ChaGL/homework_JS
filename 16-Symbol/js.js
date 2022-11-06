'use strict';


const id = Symbol('id');// В скобках описание


const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false



//console.log(id); // TypeError: Cannot convert a Symbol value to a string
console.log(id.toString());
console.log(id.description);


const user = {
  name: 'Вася',
  [id]: 123,
};

user[id] = 2;

console.log(user[id]);



for (const key in user) {
  console.log(key);
}
//Не выведит символ


// читаем символ из глобального реестра и записываем его в переменную
const idtest = Symbol.for('idtest');
// если символа не существует, он будет создан

// читаем его снова и записываем в другую
//переменную (возможно, из другого места кода)
const idAgain = Symbol.for('idtest');

// проверяем -- это один и тот же символ
console.log(idtest === idAgain); // true

// получаем символ по имени
const sym = Symbol.for('name');
const sym2 = Symbol.for('idnew');

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // idnew
