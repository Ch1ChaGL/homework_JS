'use strict';


/*Свойство key объекта события позволяет получить символ,
а свойство code – «физический код клавиши».

К примеру, одну и ту же клавишу Z можно нажать с клавишей Shift
и без неё. В результате получится два разных символа:
z в нижнем регистре и Z в верхнем регистре.

Свойство event.key – это непосредственно символ,
и он может различаться. Но event.code всегда будет тот же:

Клавиша	event.key	event.code
Z	z (нижний регистр)	KeyZ
Shift+Z	Z (Верхний регистр)	KeyZ */


const test = document.querySelector('.test');

const text =  document.querySelector('#text');
const inp = document.querySelector('#inp');

let count = 0;
let lastKey = '';


// inp.addEventListener('keydown', event => {
//   if (event.code === 'ShiftLeft') return;
//   console.log(event.key);
//   console.log(event.code);
//   if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     event.preventDefault();
//     text.value = 'Отменить';
//   }

//   if (lastKey !== event.key) {
//     count = 0;
//     lastKey = event.key;
//   }
//   const povtor = (event.repeat ? ': (repeat)' : '');
//   text.value += `${event.key} : ${count++}  ${povtor}\n`;

// });



inp.addEventListener('keydown', event => {
  if (event.code === 'ShiftLeft') return;
  console.log(event.key);
  console.log(event.code);
  if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    text.value = 'Отменить';
  }
  if (event.repeat) {
    if (lastKey !== event.key) {
      count = 0;
      lastKey = event.key;
    }
    text.value += `${event.key} : ${count++}\n`;
  }
});

//Если пользователь работает с разными языками,
//то при переключении на другой язык символ
// изменится с "Z" на совершенно другой.
//Получившееся станет новым значением event.key,
//тогда как event.code останется тем же: "KeyZ".



/*Автоповтор
При долгом нажатии клавиши возникает автоповтор:
keydown срабатывает снова и снова, и когда клавишу отпускают,
то отрабатывает keyup. Так что ситуация, когда много keydownи
один keyup, абсолютно нормальна.

Для событий, вызванных автоповтором,
у объекта события свойство event.repeat равно true. */
