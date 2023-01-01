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
