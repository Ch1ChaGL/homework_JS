'use strict';



//Введение колбэки
// function loadScript(src, callback) {
//   const script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   alert(`Здорово, скрипт ${script.src} загрузился`);
//   // eslint-disable-next-line no-undef
//   alert(_); // функция, объявленная в загруженном скрипте
// });


// loadScript('/my/script.js', script => {

//   alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

//   loadScript('/my/script2.js', script => {
//     alert('Здорово, второй скрипт загрузился');
//   });

// });


//Асинхронность


// console.log('Start');
// console.log('Start2');


// function timeout2Sec() {
//   console.log('timeout2Sec');
// }

// setTimeout(() =>  {
//   console.log('Inside timeout, after 5 seconds');
// }, 5000);
// setTimeout(timeout2Sec, 2000);
// console.log('end');

//Кода мало, но я сидел смотрел теорию

console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'Working'
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData);
//   }, 2000);
// }, 2000);



const p = new Promise(resolve =>  {
  setTimeout(() => {
    console.log('Preparinf data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'Working'
    };
    resolve(backendData);
  }, 2000);
});


p.then(data => new Promise((resolve, reject) => {
  setTimeout(() => {
    data.modified = true;
    reject(data);
  }, 2000);
}))
  .then(clientData => {
    console.log('Data received', clientData);
    clientData.fromPromise = true;
    return clientData;
  })
  .then(data => {
    console.log('Modified', data);
    return new Promise(resolve => {
      setTimeout(() => {
        const text = 'testText';
        console.log('test');
        resolve(text);
      }, 2000);
    });
  })
  .then(text => {
    console.log('Я тут был');
    console.log(text);
    return 123;
  })
  .then(num => console.log(num))
  .catch(err => console.error('Error: ', err))
  .finally(() => console.log('finally'));






// const fn1 = text => text;

// fn1.then(text => console.log(text));


// fn1('Привет мир');






// {
//   const sleep = ms =>
//     new Promise(resolve => setTimeout(() => resolve(), ms));

//   sleep(2000).then(() => console.log('After 2 sec'));
//   sleep(3000).then(() => console.log('After 3 sec'));
// }


// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => console.log('Test100'), 2000);
//   resolve(true);
// });

// p2.then(data => {
//   console.log(data);
// });



