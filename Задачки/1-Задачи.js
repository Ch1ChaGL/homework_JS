'use strict';

//1

const greet = (name, year) => {
  console.log(`Привет ${name} , год рождения ${year} `);
};
const name = 'Данил';
const YEARS = 1052004;


greet(name, YEARS);


//2

const range = (strat, end) => {
  const len = end - strat;
  if (len < 0) return [];
  const array = new Array(len);
  for (let i = strat; strat <= end; strat++) {
    array[i] = strat;
    console.log(array[i]);
  }
  return array;
};

range(10, 20);

const rangeOdd = (start, end) => {
  const len = Math.ceil((end - start) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = start; start <= end; start++) {
    if (n % 2 !== 0) array[i++] = n;
  }
  return array;

};

rangeOdd(10, 20);

//3
console.log('Начало 3');

const average = (number1, number2) => (number1 + number2) / 2;
const square = number1 => number1 ** 2;
const cube = number1 => number1 ** 3;

const calculate = () => {
  const SIZE_3 = 10;
  const ARRAY_3 = [];
  for (let i = 0; i < SIZE_3; i++) {
    ARRAY_3.push(average(square(i), cube(i)));
  }
  return ARRAY_3;
};

const answer = calculate();
for (let i = 0; i < 10; i++) {
  console.log(answer[i]);
}
//4

const fn = name => {
  const obj1 = {
    name,
  };
  let obj2 = {
    name,
  };
  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';
  obj2 = { name: 'Marcus Aurelius' };
  obj2 = obj1;
  obj2.name = name;
};

fn('Данил');

const createUser = (name, city) => ({ name, city });

const answer4 = createUser('Данил', 'СПБ');
console.log(answer4.name);
console.log(answer4.city);


//5

const telephoneBook = [];

telephoneBook.push({ name: 'Данил', phone: '+79052000960' });
telephoneBook.push({ name: 'Иван', phone: '+378123671233' });
telephoneBook.push({ name: 'Артем', phone: '+132781361671' });
telephoneBook.push({ name: 'Илья', phone: '+8123781315531' });

const findPhoneByName = name1 => {
  for (const obj of telephoneBook) {
    if (obj.name === name1) {
      return obj.phone;
    }
  }
  return false;
};
const findPhoneByPhone = phone => {
  for (const obj of telephoneBook) {
    if (obj.phone === phone) {
      return obj.name;
    }
  }
  return false;
};

const answer5 = findPhoneByName('Данил');

console.log(answer5);
console.log(findPhoneByPhone('+79052000960'));

