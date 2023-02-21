'use strict';

const html = document.documentElement;


//alert(html.clientWidth);
//alert(window.innerWidth);


const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

//alert('Полная высота документа с прокручиваемой частью: ' + scrollHeight);



const scrollBottom = html.scrollHeight - html.scrollTop - html.clientHeight;
//alert(scrollBottom);

const div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;


//alert(scrollWidth);


//alert('Текущая прокрутка сверху: ' + window.pageYOffset);
//alert('Текущая прокрутка слева: ' + window.pageXOffset);

window.scrollBy(0, 10);
// Метод scrollBy(x,y) прокручивает страницу
//относительно её текущего положения. Например, scrollBy(0,10)
//прокручивает страницу на 10px вниз.

//elem.scrollIntoView(top)
//прокручивает страницу, чтобы elem оказался вверху. У него есть один аргумент:

//1 top=true (по умолчанию) то страница будет
//прокручена чтобы elem появился в верхней части окна

//2 top=false, то страница будет прокручена, чтобы elem появился внизу.



//Запретить прокрутку
//document.body.style.overflow = 'hidden';


/*Метод elem.getBoundingClientRect() возвращает
координаты в контексте окна для минимального
по размеру прямоугольника, который заключает
в себе элемент elem, в виде объекта встроенного класса DOMRect. */


/*Основные свойства объекта типа DOMRect:

x/y – X/Y-координаты начала прямоугольника относительно окна,
width/height – ширина/высота прямоугольника (могут быть отрицательными).
Дополнительные, «зависимые», свойства:

top/bottom – Y-координата верхней/нижней границы прямоугольника,
left/right – X-координата левой/правой границы прямоугольника. */








