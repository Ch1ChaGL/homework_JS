'use strict';
/* В JavaScript у каждой выполняемой функции, блока кода и скрипта
есть связанный с ними внутренний (скрытый) объект,
называемый лексическим окружением LexicalEnvironment.

Объект лексического окружения состоит из двух частей:

Environment Record – объект, в котором как свойства
хранятся все локальные переменные
(а также некоторая другая информация, такая как значение this).

Ссылка на внешнее лексическое окружение –
то есть то, которое соответствует коду снаружи
(снаружи от текущих фигурных скобок).*/

let name = 'John';

function sayHi() {
  console.log('Hi, ' + name);
}

name = 'Pete'; // (*)

sayHi(); // Pete

name = 'Danil';

sayHi(); //Danil

//Функция называется «вложенной», когда она создаётся внутри другой функции.

function sayHiBye(firstName, lastName) {

  // функция-помощник, которую мы используем ниже
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());

}

sayHiBye('Danil', 'Markov');

function User(name) {
  this.sayHi1 = function() {
    console.log(name);
  };
}

const user = new User('Danil');

user.sayHi1(); // Danil

function makeCounter() {
  let count  = 0;
  return function() {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

//Все функции «при рождении» получают скрытое свойство [[Environment]],
//которое ссылается на лексическое окружение места, где они были созданы.


/*Сумма с помощью замыканий
важность: 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4*/

const sum = a => b => (a + b);

console.log(sum(5)(2));


const inBetween = (a, b) => num => num >= a && num <= b;
const inArray = arr => num => arr.includes(num);


const arrTest = [1, 2, 3, 4, 5, 6, 7];

console.log(arrTest.filter(inBetween(3, 6)));
console.log(arrTest.filter(inArray([1, 2, 3, 4, 8])));



const byField = field => (a, b) => (a[field] > b[field] ? 1 : -1);


const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' }
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log();

function makeArmy() {
  const shooters = [];

  for (let i = 0; i < 10; i++) {
    const shooter = function() {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}

const arm = makeArmy();
arm[0]();
arm[1]();

