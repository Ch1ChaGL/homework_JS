'use strict';


/*mousedown mouseup кнопка мыши нажата или отпущена
  mouseover mouseout курсор появляется на элементе или уходит с него
  mousemove при движении мыши
  click
  dbclick
  contextmenu
*/


/*
    События с кликом имеют свойство event.button
    оно позволяет отследить какой кнопкой вызвано событие

    Состояние кнопки	event.button
    Левая кнопка (основная)	0
    Средняя кнопка (вспомогательная)	1
    Правая кнопка (вторичная)	2
    Кнопка X1 (назад)	3
    Кнопка X2 (вперёд)	4
*/

/*
    Модификаторы: shift, alt, ctrl и meta
    Все события мыши включают в себя
    информацию о нажатых клавишах-модификаторах.

    Свойства события:

    shiftKey: Shift
    altKey: Alt (или Opt для Mac)
    ctrlKey: Ctrl
    metaKey: Cmd для Mac
    Они равны true, если во время события была нажата соответствующая клавиша
*/


const btn1 = document.querySelector('.btn1');

function event1(event) {
  if (event.shiftKey && event.altKey) {
    alert('Событие сработало');
  }
}


btn1.addEventListener('click', event1);


const input1 = document.querySelector('.input1');
const test = document.querySelector('.test');


// input1.addEventListener('mousemove', event => {
//   const box = test.getBoundingClientRect();
//   const x = event.clientX - box.left;
//   const y = event.clientY - box.top;
//   event.currentTarget.value = `${x} : ${y}`;
// });


input1.addEventListener('mousemove', event => {
  event.currentTarget.value = `client: ${event.clientX} : ${event.clientY}\n
  Page: ${event.pageX} : ${event.pageY}`;
});


const test2 = document.querySelector('.test2');


test2.addEventListener('dblclick', event => {
  alert('Произошел двойной клик');
});

test2.addEventListener('mousedown', event => {
  event.preventDefault();
  window.getSelection().removeAllRanges();
});

const noCopy = document.querySelector('.no-copy');


document.addEventListener('copy', event => {
  const selectText = window.getSelection().toString();
  const myText = `${selectText} вы скопировали мой текст атата!`;
  event.preventDefault();
  event.clipboardData.setData('text/plain', myText);
});
