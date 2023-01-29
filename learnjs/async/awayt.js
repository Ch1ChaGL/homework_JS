'use strict';


const delay = ms => new Promise(r => setTimeout(() => r(), ms));

// delay(2000)
//   .then(() => console.log(2));


const url = 'https://jsonplaceholder.typicode.com/todos';
// function fetchTodos() {
//   return delay(2000).then(() => fetch(url))
//     .then(response => response.json());
// }

// fetchTodos().then(data => console.log(data));



// async function fetchAsyncTodos() {
//   await delay(2000);
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// fetchAsyncTodos();



async function f1() {
  const result = await new Promise(((res, rej) => {
    setTimeout(() => res('Готово!'), 1000);
  }));
  console.log(result);
}


const f2 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Готово2'), 2000);
});

f2().then(data => console.log(data));

const delay2 = ms => new Promise(r => setTimeout(() => r('Test2'), ms));

const f3 = () => delay(2000).then(() => delay2(2000)).then(data => data + 'test2');

f3().then(data => console.log(data));



async function f4() {
  await delay2(2000);
  return await delay2(2000) + 'test3';
}

f4().then(data => console.log(data));






async function fn1() {
  const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
  return await res.json();
}
async function fn2() {
  const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
  return await res.json();
}
async function fn3() {
  const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
  return await res.json();
}


async function go() {
  const obj1 = await fn1();
  console.log(obj1);
  const obj2 = await fn2();
  console.log(obj2);
  const obj3 = await fn3();
  console.log(obj3);
}

go().then(() => console.log('Конец'));
