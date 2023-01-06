'use strict';


const sum = (a, b) => a + b;

console.log(sum(5, 6));

const sumWithRest = (...args) => {
  const sum = args.reduce((acum, cur) => acum + cur);
  return sum;
};

console.log(sumWithRest(2, 3, 4, 5, 6, 1, 3, 1));


const sumWithRestButTwoNormalParam = (a, b, ...args) => {
  console.log(a, b);
  return a + b + args.reduce((acum, cur) => acum + cur);
};
console.log(sumWithRestButTwoNormalParam(2, 3, 1, 2, 34, 5, 6, 7, 1));



//Переменная arguments


function showName() {
  console.log(arguments.length);
  // eslint-disable-next-line prefer-rest-params
  console.log(arguments[0]);
  // eslint-disable-next-line prefer-rest-params
  console.log(arguments[1]);

}

showName('Илья', 'Иван'); // 2, Илья, Иван
showName('Данил'); // 1, Данил, Undefind



//Стрелочные функции не имеют arguments

function f() {
  // eslint-disable-next-line prefer-rest-params
  const showArg = () => console.log(arguments[0]);
  showArg(2);
}

f(1);
//output: 1;
//Стрелочная функция видит arguments внешней Function declaration


const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(Math.min(...arr)); //Оператор расширения
console.log(Math.max(...arr)); //Оператор расширения

