'use strict';


//alert(document.body.constructor.name);
console.log(document.body);
console.dir(document.body);


const test = document.body.firstChild;

alert(test.nodeName);


const children = document.body.children;


for (const child of children) {
  /*-Добавит в существующий div вот этот div, тоесть возвращает
  содержимое элемента вместе, с другими тегами, или их задает,*/
  //child.innerHTML = '<div>Новый текст</div>';


  //Добавит именно текст в элемент
  //child.textContent = '<div>Новый текст</div>';

  //Вернет весь элемент включая теги самого элемента
  console.log(child.outerHTML);
}

const body = document.body;
const hiddenText = body.querySelector('.hidden');

hiddenText.hidden = true;

setInterval(() => hiddenText.hidden = !hiddenText.hidden, 1000);


const dataTest = body.querySelector('.datatest');

for (const value of Object.values(dataTest.dataset)) {
  console.log(value);
}


