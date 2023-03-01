'use strict';


const menu = document.querySelector('#menu');


function click(event) {

  if (event.target.tagName !== 'A') return false;

}


const form = document.querySelector('#form');
function clickOnForm(event) {
  alert(`Current ${event.currentTarget} , target ${event.target}`);
}
function clickOnP(event) {
  alert(`Current ${event.currentTarget} , target ${event.target}`);
}


const p = form.querySelector('p');
p.addEventListener('click', clickOnP, false);
form.addEventListener('click', clickOnForm);


const btn = document.querySelector('.class-button');

function oncontextmenuBtn(event) {
  //event.preventDefault(); //Останавливаем стандартный обработчик браузера
  alert('Контекстное меню кнопки');
}

function oncontextmenuDocument(event) {
  //Если при всплытие уже был остановлен стандартный обработчик, то ретурн
  //if (!event.defaultPrevented) { event.preventDefault(); return; }
  //event.preventDefault();
  alert('Контекстное меню документа');
}

document.addEventListener('contextmenu', oncontextmenuDocument);
btn.addEventListener('contextmenu', oncontextmenuBtn);
