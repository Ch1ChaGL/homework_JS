'use strict';

const element = document.getElementById('elem');
element.style.background = 'red';


const elements = document.querySelectorAll('ul > li:last-child');


for (const element of elements) {
  alert(element.textContent);
}

const firstSelector = document.querySelector('ul > li:last-child');
alert(firstSelector.textContent);


for (const elem of document.body.children) {
  elem.style.color = 'green';
  if (elem.matches('a[href$="zip"]')) {
    alert('Ссылка на архив: ' + elem.href + 'Тест цвета: ' + elem.color);
  }
}
