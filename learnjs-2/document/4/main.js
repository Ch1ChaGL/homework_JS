'use strict';

// const element = document.getElementById('elem');
// element.style.background = 'red';


// const elements = document.querySelectorAll('ul > li:last-child');


// for (const element of elements) {
//   alert(element.textContent);
// }

// const firstSelector = document.querySelector('ul > li:last-child');
// alert(firstSelector.textContent);


// for (const elem of document.body.children) {
//   elem.style.color = 'green';
//   if (elem.matches('a[href$="zip"]')) {
//     alert('Ссылка на архив: ' + elem.href + 'Тест цвета: ' + elem.color);
//   }
// }


const chapter = document.querySelector('.chapter');


// alert(chapter.closest('.book'));
// alert(chapter.closest('.content'));



const inputs = document.getElementById('table').getElementsByTagName('input');
const testInput = document.querySelector('.test');
const value = testInput.parentElement;
value.textContent = 'СУКААААА';
// alert(testInput);
// for (const input of inputs) {
//   alert(input.value + ': ' + input.checked);
// }


const articles = document.querySelectorAll('.article');
// alert(articles.length);



for (const article of articles) {
  article.textContent += 'Изменил типо';
}


const elemA = document.getElementById('elemA');
const elemB = document.querySelector('#elemB');


alert(elemA.contains(elemB));
alert(elemA.contains(elemA));
alert(elemB.contains(elemA));
