'use strict';

const form = document.querySelector('.form');

form.onclick = function(event) {
  event.target.style.backgroundColor = 'yellow';

  // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
  const f1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      alert('target = ' + event.target.tagName + ', this=' + this.tagName);
      event.target.style.backgroundColor = '';
      resolve(true);
    }, 0);
  });
  const f2 = async function() {
    const answer = await f1;
    alert('Асинхронная функция сработала со значением ' + answer);
  };
  f1.then(() => {
    alert('Асинхронность работает');
  });
  f2().then(() => alert('А это сработал then у асинхронной функции'));
};

let count = 1;
function hi(event) {
  //event.stopPropagation(); //препятствует продвижению события дальше,
  //но на текущем элементе все обработчики будут вызваны.
  event.stopImmediatePropagation();// Он не только предотвращает всплытие,
  //но и останавливает обработку событий на текущем элементе.
  alert(count++);
}
// const Danil = {
//   name: 'Danil',
//   age: 18,
// };
const div1 = document.querySelector('.test');
const btn1 = div1.children[0];

btn1.addEventListener('click', hi);
div1.addEventListener('click', hi);


//События имеют три фазы
// 1. Фаза погружения
// 2. Фаза цели
// 3. Фаза всплытия



//Чтобы поймать событие на стадии погружения,
//нужно использовать третий аргумент capture вот так:

// Существуют два варианта значений опции capture:
// Если аргумент false (по умолчанию), то событие будет поймано при всплытии.
// Если аргумент true, то событие будет перехвачено при погружении.



const test2 = document.querySelector('.test2');

for (const elem of test2.querySelectorAll('*')) {
  elem.addEventListener('click', element =>
    alert(`Всплытие: ${elem.tagName}`));

  elem.addEventListener('click', element => {
    alert(`Погружение: ${elem.tagName}`);
  }, true);
}



document.addEventListener('click', event => {
  if (event.target.dataset.counter !== undefined) {
    event.target.value++;
  }
  if (event.target.dataset.toggleId !== undefined) {
    const id = event.target.dataset.toggleId;
    const element = document.getElementById(id);
    element.hidden = !element.hidden;
  }
});



