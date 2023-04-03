'use strict';

//DOMContentLoaded браузер полностью загрузил HTML,
//было построено DOM-дерево, но внешние ресурсы, такие как картинки

//load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).

//beforeunload/unload – пользователь покидает страницу.

// document.addEventListener('DOMContentLoaded', () => {
//   alert('DOM ready!');
//   const img = document.getElementById('img');
//   //Изображения еще не загружено
//   alert(`Size of image ${img.offsetWidth}x${img.offsetHeight}`);
// });

// window.addEventListener('load', () => {
//   alert('Страница загружена!');
//   const img = document.getElementById('img');
//   //К этому моменту картинка загружена
//   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// });

const analyticsData = {
  /* объект с собранными данными */
};

window.addEventListener('unload', () => {
  //Обычно здесь отсылают статистику.
  //Для этого существует специальный метод navigator.sendBeacon(url, data), описанный в спецификации https://w3c.github.io/beacon/.
  navigator.sendBeacon('/analytics', JSON.stringify(analyticsData));
});

window.addEventListener(
  'beforeunload',
  event =>
    (event.returnValue = 'Есть несохранённые изменения. Всё равно уходим?'),
);

//Свойство document.readyState показывает нам текущее состояние загрузки.

//Есть три возможных значения:

//"loading" – документ загружается.
//"interactive" – документ был полностью прочитан.
//"complete" – документ был полностью прочитан и
//все ресурсы (такие как изображения) были тоже загружены.

const work = () => {};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', work);
} else {
  work();
}

console.log(document.readyState);

document.addEventListener('readystatechange', () => alert(document.readyState));
