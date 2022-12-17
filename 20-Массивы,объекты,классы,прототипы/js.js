'use strict';

//Объекты

const person1 = {};
person1.name = 'Mаrkus';
const person2 = new Object();
person2.name = 'Markus';

const person3 = {
  name: 'Markus',
};
console.dir({ person1, person2, person3 });


const person4 = {
  name: 'Marcus',
  get city() {
    return 'Roma';
  },
  set city(value) {
    console.log('Markus remains in Rome');
  }
};
const a = person4.city;
console.log(a, { person4 });
person4.city = 'Moscow';



if ('name' in person4) {
  console.log('person name is:' + person4.name);
}

for (const key in person4) {
  const value = person4[key];
  console.dir({ key, value });
}

//Массивы
const letters = [];

letters.push('B');
console.dir({ letters });
letters.unshift('A'); //Добавление в начало\
letters.push('C');
console.dir({ letters });


//Сериализация - преобразования массива или объекта в строку

const person5 = {
  name: 'Marcus',
  city: 'Roma',
  born: 121,
};

const s = JSON.stringify(person5); //Преобразование объекта в строку
const ss = JSON.stringify(letters);//Преобразование массива в строку
console.log(letters + '');//Преобразование массива в строку c потерей точности
console.log(letters.join('---'));
console.log(ss);
console.log(s);
console.log(person5 === s, letters === ss); //false,false
const obj = JSON.parse(s); //Преобразование строки в объект
const arr = JSON.parse(ss); //Преобразование строки в массив
console.dir(obj);
console.dir(arr);




{
  const numbers = [7, 10, 1, 5, 2];
  numbers.forEach((item, i, arr) => {
    console.log(i, arr, item);
  });
  numbers.field2 = 'Values2';
  numbers[-10] = 'value3';
  numbers.field1 = 'value3';
  numbers[5] = 20;


  for (const i in numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
  }

  for (const i of numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
  }
}

{
  const f1 = x => x * 2;
  const f2 = x => ++x;

  const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);

  const f3 = compose(f1, f2);
  const res1 = [7, 10, 1, 5, 2]
    .filter(x => x > 4)
    .map(f3)
    .reduce((acc, val) => acc + val);
  console.log(res1);
}
