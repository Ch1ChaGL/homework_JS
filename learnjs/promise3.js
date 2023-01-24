'use strict';



new Promise((resolve, reject) => {
  setTimeout(() => resolve('value'), 2000);
})
  .finally(() => new Error()) // срабатывает первым
  .then(result => console.log(result)); // <-- .then показывает "value"



const fn = (ms, callback, ...args) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(callback(...args));
  }, ms, ...args);
});


const sum = (...args) => args.reduce((prev, cur) => prev + cur);


const result = fn(10000, sum, 2, 3);

result.then(result => console.log(result));
