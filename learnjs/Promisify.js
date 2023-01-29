'use strict';


const  promisify = (fn, manyArgs = false) => (...args) => {
  new Promise((resolve, reject) => {
    function callback(err, ...result) {
      if (err) reject(err);
      else {
        resolve(manyArgs ? result : result[0]);
      }
    }

    args.push(callback);
    fn.call(this, ...args);
  });
};


const promise = Promise.reject(new Error('Ошибка в промисе!'));
promise.catch(err => alert('поймана!'));

// не запустится, ошибка обработана
window.addEventListener('unhandledrejection', event => {
  alert(event.reason);
});
