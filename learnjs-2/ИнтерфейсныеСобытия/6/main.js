'use strict';


//Функция для просмотра прокрутки

window.addEventListener('scroll', () => {
  document.querySelector('selector').innerHTML = window.scrollY + 'px';
});
