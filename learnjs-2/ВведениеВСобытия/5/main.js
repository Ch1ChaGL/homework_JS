
'use strict';


// let event = new Event(type[, options]);
// Где:

// type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
// options – объект с тремя необязательными свойствами:
// bubbles: true/false – если true, тогда событие всплывает.
// cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
// composed: true/false – если true, тогда событие будет всплывать наружу за пределы Shadow DOM.


const btn = document.querySelector('#btn');

const event1 = new Event('click');


//btn.dispatchEvent(event1);

const h1 = document.querySelector('#h1');

h1.addEventListener('hello', event => {
  console.log('Привет из кода' + event.target.tagName);
});


const event2 = new Event('hello', { bubbles: true });

const event3 = new MouseEvent('contextmenu', {
  bubbles: true,
  cancelable: true,
  clientX: 20,
  clientY: 20,
});

document.addEventListener('contextmenu', event => {
  event.preventDefault();
  console.log(`Контекстное меню вызвано на координатах x: ${event.clientX} y: ${event.clientY}`);
});

document.dispatchEvent(event3);






const myEvent = new CustomEvent('OMG', { bubbles: true,
  cancelable: true, detail: { name: 'Ch1Cha_Gl' } });


const divTest = document.querySelector('.test');

divTest.addEventListener('OMG', event => {
  event.preventDefault();
  console.log(`event type: ${event.type} event.target: ${event.target} event.currentTarget: ${event.currentTarget}\n
  event.detail.name: ${event.detail.name}`);
  const elem = event.target;
  elem.style.backgroundColor = 'red';
  return 'Hello world';
});

setTimeout(() => {
  const value = divTest.dispatchEvent(myEvent);
  alert(value);
}, 0);



