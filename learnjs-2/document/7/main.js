'use strict';


const div = document.createElement('div');
const div2 = document.createElement('div');
const parent = document.querySelector('.parent');
div.className = 'alert';
div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
div2.className = 'alert';
div2.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';

// document.body.append(div2); -В конец элемнта
parent.appendChild(div); //В конец элемнта
// parent.prepend(div); в начале
// parent.before(div); до элемнта
// parent.after(div); после элемента
// parent.replaceWith(div); заменить элемент



parent.insertAdjacentHTML('beforebegin', '<b>тест</b>');


parent.firstChild.insertAdjacentText('beforeend', 'text');


// const hide = new Promise((resolve, reject) => {
//   fadeOut(parent).then(resolve);
// });



async function fadeOut(parent) {
  return new Promise((resolve, reject) => {
    let opacity = 1;
    function step() {
      opacity -= 0.05;
      parent.style.opacity = opacity;
      if (opacity <= 0) {
        parent.remove();
        resolve();
      }
      requestAnimationFrame(step);
    }
    step();
  });
}


const parent2 = div.cloneNode(true);

parent2.textContent = 'Всем дастишь фантастишь';

document.body.append(parent2);



// hide.then(() => fadeOut(parent2));



async function sequentialHiding(...args) {
  for (const value of args) {
    await fadeOut(value);
  }
}


sequentialHiding(parent2, parent);
