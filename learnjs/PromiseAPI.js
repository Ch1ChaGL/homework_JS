'use strict';

/*Допустим, нам нужно запустить множество
промисов параллельно и дождаться, пока все они выполнятся.

Например, параллельно загрузить несколько
файлов и обработать результат, когда он готов.

Для этого как раз и пригодится Promise.all. */


Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000)),
])
  .then(response => console.log(response));

/*Обратите внимание, что порядок элементов массива
в точности соответствует порядку исходных промисов.
Даже если первый промис будет выполняться дольше всех,
 его результат всё равно будет первым в массиве. */

// const urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// const request = urls.map(el => {
//   fetch(el);
// });


// Promise.all(request)
//   .then(responses => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => alert(user.name)));


/*Метод Promise.allSettled всегда ждёт
завершения всех промисов. В массиве результатов будет

{status:"fulfilled", value:результат} для успешных завершений,
{status:"rejected", reason:ошибка} для ошибок. */

const urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];


Promise.allSettled(urls.map(el => fetch(el)))
  .then(
    result => {
      result.forEach((el, i) => {
        if (el.status === 'fulfilled') {
          alert(`${urls[i]}: ${el.value.status}`);
        }
        if (el.status === 'rejected') {
          alert(`${urls[i]}: ${el.reason}`);
        }
      });
    }
  );


/*Метод очень похож на Promise.all, но ждёт только первый выполненный промис,
  из которого берёт результат (или ошибку). */


{
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 1000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000)),
  ])
    .then(result => alert(result))
    .catch(err => alert(err));

}

/*Метод очень похож на Promise.race,
но ждёт только первый успешно выполненный промис, из которого берёт результат.

Если ни один из переданных промисов не завершится успешно,
тогда возвращённый объект Promise будет отклонён
с помощью AggregateError – специального объекта ошибок,
который хранит все ошибки промисов в своём свойстве errors. */



{
  Promise.any([
    new Promise((r, reject) => setTimeout(() =>
      reject(new Error('Ошибка!')), 1000)),
    new Promise((resolve, rej) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, rej) => setTimeout(() => resolve(3), 3000))
  ])
    .then(alert);


}
