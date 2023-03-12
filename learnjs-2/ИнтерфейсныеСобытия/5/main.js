'use strict';


/*Типы событий указателя
Схема именований событий указателя похожа на события мыши:

Событие указателя	Аналогичное событие мыши
pointerdown	mousedown
pointerup	mouseup
pointermove	mousemove
pointerover	mouseover
pointerout	mouseout
pointerenter	mouseenter
pointerleave	mouseleave
pointercancel	-
gotpointercapture	-
lostpointercapture	- */

const pressureEvent = new CustomEvent('pressureEvent', {
  bubbles: true,
  cancelable: true,
  detail: {
    pressure: 0.33,
  }
});


const btn1 = document.querySelector('.btn1');


btn1.addEventListener('pressureEvent', event => {
  alert(event.detail.pressure);
});

setTimeout(() => btn1.dispatchEvent(pressureEvent), 3000);

/*Событие pointercancel происходит, когда текущее
действие с указателем по какой-то причине прерывается,
и события указателя больше не генерируются.

К таким причинам можно отнести:

Указывающее устройство было физически выключено.
Изменилась ориентация устройства (перевернули планшет).
Браузер решил сам обработать действие,
считая его жестом мыши, масштабированием и т.п. */
