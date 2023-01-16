'use strict';

//Базовый случай и рекурсивный


function countdown(i) {
  console.log(i);
  if (i <= 1) return;  //Базовый случай
  countdown(i - 1); //Рекурсивный случай
}


countdown(6);



//Стек вызова

function greet(name) {
  console.log('Hello, ' + name + '!');
  greet2(name);
  console.log('Geatting ready to say bye...');
  bye();
}


function greet2(name) {
  console.log(`How are you ${name}`);
}

function bye() {
  console.log('OK BYE');
}


greet('Danil');


function fact(x) {
  if (x === 1) return 1;
  return x * fact(x - 1);
}

console.log(fact(10));

