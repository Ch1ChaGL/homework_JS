'use strict';


const div = document.querySelector('.main');

// for (const oneClass of div.classList) {
//   alert(oneClass);
// }

// div.classList.add('second');

// for (const oneClass of div.classList) {
//   alert(oneClass);
// }


// const listWithCssStyle = getComputedStyle(div);

// alert(listWithCssStyle.border);


function showNotification(obj) {

  const div = document.createElement('div');
  div.classList.add('notification');
  if (obj.className) {
    div.classList.add(obj.className);
  }
  div.style.top = obj.top;
  div.style.right = obj.right;
  div.innerHTML = obj.html;
  document.body.append(div);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, div);
  });

}

showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: 'Hello!', // HTML-уведомление
  className: 'welcome' // дополнительный класс для div (необязательно)
}).then(elem => elem.remove());


