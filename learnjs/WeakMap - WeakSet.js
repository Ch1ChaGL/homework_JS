'use strict';
const map = new Map();
const weakmap = new WeakMap();

let obj = {};
map.set(obj, 'ok');
weakmap.set(obj, 'ok');
//weakmap.set('test', 'erorr');//ошибка
console.log(map.get(obj));
console.log(weakmap.get(obj)); //true
obj = null;
console.log(map.size); //1,
// хотя мы удалили ключ, но память осталась, что не есть хорошо
console.log(weakmap.get(obj)); //false

//Object.getOwnPropertySymbols //Возвращает массив только с символьными ключами
//Reflect.ownKeys(obj) //Возвращает все ключи


// const salaries = obj => {
//   let sum = 0;
//   for (const value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// };

// const salaries2 = obj => Object.values(obj).reduce((a, b) => a + b);

// const count = obj => Object.keys(obj).length;
