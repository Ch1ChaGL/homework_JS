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
      opacity -= 0.03;
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


const ul = document.querySelector('.ul');

function getListFragment(count) {
  const fragment = new DocumentFragment();

  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }
  return fragment;
}


function getListFragmentArr(count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.append(i);
    result.push(li);
  }
  return result;
}


ul.append(...getListFragmentArr(5));




function clear(nodeName) {
  const elem = document.querySelector(nodeName);
  // while (elem.firstChild) {
  //   elem.firstChild.remove();
  // }
  elem.innerHTML = '';

}


clear('.ul');


function createCreativeList(varios, classNameUser) {
  const newOl = document.createElement(varios);
  newOl.className = classNameUser;
  document.body.append(newOl);

  while (true) {
    const answer = prompt('Что вставляем', 'Простой текст');
    if (answer) {
      const li = document.createElement('li');
      li.textContent = answer;
      li.className = 'li-' + classNameUser;
      newOl.append(li);
    } else break;
  }
}


setTimeout(() => createCreativeList('ol', 'test'), 0);

const container = document.getElementById('container');
const data = {
  'Рыбы': {
    'форель': {},
    'лосось': {}
  },

  'Деревья': {
    'Огромные': {
      'секвойя': {},
      'дуб': {}
    },
    'Цветковые': {
      'яблоня': {},
      'магнолия': {}
    }
  }
};

// function createTree(container, data) {
//   for (const key in data) {
//     if (typeof data[key] === 'object' && Object.values(data[key]).length > 0) {
//       const ul = document.createElement('ul');
//       ul.textContent = key;
//       container.append(ul);
//       createTree(container.lastChild, data[key]);
//     } else {
//       const li = document.createElement('li');
//       li.textContent = key;
//       container.append(li);
//     }
//   }
// }


// function createTree(container, data) {
//   for (const key in data) {
//     if (typeof data[key] === 'object' && Object.values(data[key]).length > 0) {
//       const ul = document.createElement('ul');
//       container.append(ul);
//       const li = document.createElement('li');
//       li.textContent = key;
//       container.lastChild.append(li);
//       createTree(container.lastChild, data[key]);
//     } else {
//       const li = document.createElement('li');
//       li.textContent = key;
//       container.append(li);
//     }
//   }
// }



function createTree(container, data) {
  const ul = document.createElement('ul');
  container.append(ul);
  for (const key in data) {
    const li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    if (typeof data[key] === 'object' && Object.values(data[key]).length > 0) {
      createTree(li, data[key]);
      const  countChild = li.getElementsByTagName('li').length;
      if (countChild > 0)
        li.firstChild.textContent += `[${countChild}]`;
    }
  }
}


createTree(container, data);


const ul2 = document.querySelector('.ul2');


ul2.children[0].insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
