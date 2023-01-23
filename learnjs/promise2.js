'use strict';



const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Test100');
    resolve(true);
  }, 2000);
});

p2.then(data => {
  console.log(data);
});


const sleep = ms =>
  new Promise(resolve => setTimeout(() => resolve(), ms));

// sleep(2000).then(() => console.log('After 2 sec'));
// sleep(3000).then(() => console.log('After 3 sec'));


Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('All promisec');
  });


Promise.race([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('Race promises');
  });
