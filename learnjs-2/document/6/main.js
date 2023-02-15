'use strict';


document.body.myData = {
  name: 'Ceasar',
  title: 'Imperator',
};

// alert(document.body.myData.title);


document.body.sayTagName = function() {
  alert(`Hello this is ${this.tagName}`);
};



// document.body.sayTagName();


Element.prototype.sayHi = function() {
  alert(`Hi is ${this.tagName}`);
};


// document.documentElement.sayHi();


const div1 = document.querySelector('.none-type-atribute');


// alert(div1.hasAttribute('whatisatribute'));
// alert(div1.getAttribute('whatisatribute'));
// alert(div1.setAttribute('whatisatribute2', 1234));
// alert(div1.getAttribute('whatisatribute2'));



const input = document.getElementsByTagName('input')[0];


input.setAttribute('value', 'texet3');


input.value = '123';

// alert(input.getAttribute('value'));


// setTimeout(() => alert(input.value), 3000);
// setTimeout(() => alert(input.getAttribute('value')), 3000);




const user = {
  name: 'Danil',
  age: 18,
};



for (const div of document.querySelectorAll('[show-info]')) {
  div.textContent = user[div.getAttribute('show-info')];
}



const value2 = document.querySelector('[data-widget-name]');


// alert(value2.dataset.widgetName);



// const a = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');


// for (const ref of a) {
//   ref.style.color = 'orange';
// }




const a2 = document.querySelectorAll('a');


for (const ref of a2) {
  const atributeHref = ref.getAttribute('href');
  if (atributeHref.includes('://') && !atributeHref.startsWith('http://internal.com')) ref.style.color = 'orange';
  continue;
}
