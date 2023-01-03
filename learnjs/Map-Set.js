'use strict';

//Map - колекция ключ/значение как и object,
//но позвоялет использовать ключи любого типа


//Некоторые свойтсва и методы

const map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1)); //num1
console.log(map.get('1')); //str1
console.log(map.get(true)); //bool1

console.log(map.size); //3

const electronics = {
  Laptop: 1500,
  Keyboard: 100,
};

const goods = {
  Laptop: 1500,
  Keyboard: 100,
  Mouse: 150,
  [Symbol.iterator]() {
    return {
      key: Object.keys(this),
      _value: Object.values(this),
      current: 0,
      last: Object.keys(this).length,
      next() {
        if (this.current < this.last) {
          return { done: false, value: [this.key[this.current],
            this._value[this.current++]] };
        } else {
          return { done: true };
        }
      }
    };
  }
};
const map1 = new Map(Object.entries(electronics));
const map2 = new Map(Object.entries(goods));


//Прикол в том, что объект сам по себе не итерируется,
//если в нем нет поля Symbol.iterator
//По итогу я реализовал Object.entries,
//Так как у меня тоже получается,
//что объект отдает массив ключ значение в массив с другими парами ключ значение
const map3 = new Map([...goods]
  .filter(
    ([key]) => !map1.has(key)
  ));



//Тут работает потому что Map имеет внутри себя итератор
for (const value of map1) {
  console.log(value);
}


//Сначала я не понял,
//почему работает, а потом вспомнил,
//я же сам прописал ему Symbol.iterator
//и потому он может итерироваться через for of
for (const value of goods) {
  console.log(value);
}


// for (const value of electronics) {
//   console.log(value); //TypeError: electronics is not iterable
//   Потому что у объекта нет итератора
// }

console.log(map3);




/*так намного быстрее)),
так как При 'Распаковке Map,
мы получаем массив массивов, с ключ значениями Map'a '*/
const map4 = new Map([...map2]
  .filter(([key]) => !map1.has(key)));

console.log(map4);


const john = { name: 'John' };
const john2 = john;
const MapWithObjKey = new Map();

MapWithObjKey.set(john, 'ObjValue');

console.log(MapWithObjKey.get(john2));

const set = new Set(['orange', 'apple', 'banana']);

console.log(set.keys());
console.log(set.values());
console.log(set.entries());

/*Фильтрация уникальных элементов массива
важность: 5
Допустим, у нас есть массив arr.

Создайте функцию
unique(arr), которая вернёт массив уникальных,
не повторяющихся значений массива arr.*/


function unique(arr) {
  return Array.from(new Set(arr));
}

const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'
];

console.log(unique(values));

