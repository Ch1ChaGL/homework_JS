'use strict';

//Движение мыши
/*
mouseover/out
mouseenter/leave
*/


/*Событие mouseover происходит в момент, когда курсор оказывается над элементом,
а событие mouseout – в момент, когда курсор уходит с элемента. */

/*свойство event.relatedTarget дополнительное свойство для этих событий

Для события mouseover:

event.target – это элемент, на который курсор перешёл.
event.relatedTarget –
это элемент, с которого курсор ушёл (relatedTarget → target).

Для события mouseout наоборот:

event.target – это элемент, с которого курсор ушёл.
event.relatedTarget –
это элемент, на который курсор перешёл (target → relatedTarget).

*/


/*Свойство relatedTarget может быть null
Свойство relatedTarget может быть null.

Это нормально и означает, что указатель мыши перешёл не с другого элемента,
а из-за пределов окна браузера. Или же, наоборот, ушёл за пределы окна.

Следует держать в уме такую возможность при использовании
event.relatedTarget в своём коде.
Если, например, написать event.relatedTarget.tagName,
то при отсутствии event.relatedTarget будет ошибка. */


const container = document.querySelector('.container');


const log = document.querySelector('#log');

container.onmouseover = container.onmouseout = handler;

function handler(event) {
  log.value += `${event.type}: target= ${str(event?.target)}, 
  relatedTarget= ${str(event?.relatedTarget)}\n`;
}


function str(el) {
  if (!el) return 'null';
  return el.className || el.tagName;
}



//Если был mouseover, то будет и mouseout


/*
События mouseenter/mouseleave похожи на mouseover/mouseout.
Они тоже генерируются, когда курсор мыши переходит на элемент или покидает его.

Но есть и пара важных отличий:

Переходы внутри элемента, на его потомки и с них, не считаются.
События mouseenter/mouseleave не всплывают.
*/




