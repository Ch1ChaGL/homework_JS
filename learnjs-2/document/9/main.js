'use strict';

const div = document.querySelector('#example');
const btn = document.querySelector('.btn');

btn.addEventListener('click', showFull.bind(null, div));

function showFull(div) {
  div.style.height = `${div.scrollHeight}px`;
}

div.addEventListener('click', scroll.bind(null, div));

function scroll(div) {
  div.scrollTop += 10; //
}
// alert(div.offsetLeft); //Размер в цифрах до элемента слева
// alert(div.offsetTop); //Размер в цифрах до элемента сверху

// Родительский элемент, либо body, либо
// если у родителя есть position: relative, fixed, sticky
// alert(div.offsetParent);




// alert(div.offsetWidth); //Ширина элемента вметсе с border
// alert(div.offsetHeight); //Высота элемента вметсе с border



// alert(div.clientTop); //-- Расстояние внутренней части от внешней сверху
// alert(div.clientLeft); //-- Расстояние внутренней части от внешней слева



// --Ширина внутренней части вместе с padding без полосы прокрутки
// alert(div.clientWidth);


// --Ширина внутренней части вместе с padding без полосы прокрутки
// alert(div.clientHeight);



// alert(div.scrollHeight);// Высота элемента и его скрытой части
// alert(div.scrollWidth); // Ширина элемента и его скрытой части

// alert(div.scrollTop);// Размер прокрученной области сверху
// alert(div.scrollLeft); // Размер прокрученной области слева





