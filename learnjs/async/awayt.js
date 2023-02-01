'use strict';


const delay = ms => new Promise(r => setTimeout(() => r(), ms));

// delay(2000)
//   .then(() => console.log(2));


// const url = 'https://jsonplaceholder.typicode.com/todos';
// // function fetchTodos() {
// //   return delay(2000).then(() => fetch(url))
// //     .then(response => response.json());
// // }

// // fetchTodos().then(data => console.log(data));



// // async function fetchAsyncTodos() {
// //   await delay(2000);
// //   const response = await fetch(url);
// //   const data = await response.json();
// //   console.log(data);
// // }

// // fetchAsyncTodos();



// async function f1() {
//   const result = await new Promise(((res, rej) => {
//     setTimeout(() => res('Готово!'), 1000);
//   }));
//   console.log(result);
// }


// const f2 = () => new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Готово2'), 2000);
// });

// f2().then(data => console.log(data));

// const delay2 = ms => new Promise(r => setTimeout(() => r('Test2'), ms));

// const f3 = () => delay(2000).then(() => delay2(2000)).then(data => data + 'test2');

// f3().then(data => console.log(data));



// async function f4() {
//   await delay2(2000);
//   return await delay2(2000) + 'test3';
// }

// f4().then(data => console.log(data));






// async function fn1() {
//   const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
//   return await res.json();
// }
// async function fn2() {
//   const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
//   return await res.json();
// }
// async function fn3() {
//   const res =  await fetch('https://jsonplaceholder.typicode.com/todos');
//   return await res.json();
// }


// async function go() {
//   const obj1 = await fn1();
//   console.log(obj1);
//   const obj2 = await fn2();
//   console.log(obj2);
//   const obj3 = await fn3();
//   console.log(obj3);
// }

// go().then(() => console.log('Конец'));



// {

//   const load = (name, callback) => {
//     if (name.length < 5)
//       setTimeout(callback, 3000, new Error());
//     else setTimeout(callback, 3000, null, name);
//   };


//   load('Danil', (err, arg) => {
//     console.log(arg, 'Привет!');
//   });

//   load('Dani', (err, arg) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(arg, 'test2');
//     }
//     load('Danil3', (err, arg) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(arg, 'test3');
//       }
//     });
//   });
// }


// {
//   const load = name => new Promise((resolve, reject) => {
//     if (name < 5) reject(new Error('Имя меньше 5 знаков'));
//     else {
//       setTimeout(resolve, 3000, name);
//     }
//   });


//   load('Danil')
//     .then(name => {
//       console.log(name);
//       name = name.split('');
//       name = name.reverse().join('');
//       return new Promise((resolve, reject) => {
//         if (name < 5) reject(new Error('Имя меньше 5 знаков'));
//         else {
//           setTimeout(resolve, 3000, name);
//         }
//       });
//     })
//     .then(name => console.log(name));

// }


{
  let GetNameAndReverseName = (name, callbak) => {
    if (name.lenght < 5) callbak(new Error('В имени мало букв'));
    else {
      setTimeout(callbak, 2000, null, name, name.split('').reverse().join(''));
    }
  };

  const promisify = fn => (...args) => new Promise((resolve, reject) => {
    args.push((err, ...data) => {
      if (err) reject(err);
      resolve(data);
    });
    fn(...args);
  });

  const GetNameAndReverseName2 = name => new Promise((resolve, reject) => {
    GetNameAndReverseName(name, (err, ...data) => {
      if (err) reject(err);
      resolve(data);
    });
  });


  // GetNameAndReverseName('Danil', (err, ...args) => {
  //   if (err) console.log(err);
  //   console.log(...args);
  //   GetNameAndReverseName('Artem', (err, ...args) => {
  //     if (err) console.log(err);
  //     console.log(...args);
  //   });
  // });

  GetNameAndReverseName2('Danil')
    .then(
      data => {
        console.log(data);
        return GetNameAndReverseName2('Artem');
      }
    )
    .then(data => console.log(data));


  GetNameAndReverseName = promisify(GetNameAndReverseName);

  GetNameAndReverseName('Danil')
    .then(
      data => {
        console.log(data);
        return GetNameAndReverseName('Artem');
      }
    )
    .then(data => console.log(data));

}



// async function f() {
//   const result = await new Promise((resolve, reject) => {
//     setTimeout(() => resolve('готово!'), 1000);
//   });
//   console.log(result);
// }

// f();




async function GetUserGit(username) {
  console.log('Начало');

  const response = await fetch(`https://api.github.com/users/${username}`);
  const GitUser = await response.json();
  for (const key in GitUser) {
    console.log(GitUser[key]);
  }

  return 'Конец';
}

GetUserGit('Ch1ChaGl')
  .then(data => console.log(data));



class Thenable {
  constructor(num) {
    this._num = num;
  }

  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this._num * 2), 1000);
  }




}

async function f() {
  const result = await new Thenable(1);
  alert(result);
}

f();
/*Когда await получает объект с .then, не являющийся промисом, JavaScript
автоматически запускает этот метод, передавая ему аргументы
– встроенные функции resolve и reject.
Затем await приостановит дальнейшее выполнение кода,
пока любая из этих функций не будет вызвана
(в примере это строка (*)). После чего выполнение кода
продолжится с результатом resolve или reject соответственно. */




//Асинхронный метод класса

class Waiter {
  async wait(num) {
    return await new Promise((resolve, reject) => {
      setTimeout(num => resolve(num), num * 1000, num);
    });
  }
}

new Waiter().wait(3).then(sec => console.log(sec));



async function rejectNow(num) {
  try {
    const result = await fetch('http://no-such-url');
  } catch {
    alert(`Ошибка ${num}`);
  }
}


alert(rejectNow(404));
