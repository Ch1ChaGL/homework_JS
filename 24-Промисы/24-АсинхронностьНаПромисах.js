'use strict';



// // const promisify = fn => (...args) => new Promise((resolve, reject) => {
// //   args.push((err, res) => {
// //     if (err) reject(err);
// //     else resolve(res);
// //   });
// //   fn(...args);
// // });


// // const fs = require('fs');
// // const { resolve } = require('path');
// // const readFile = promisify(fs.readFile);


// // readFile('text1.txt', 'utf8')
// //   .then(data => {
// //     console.log(data.toString());
// //     return readFile('text2.txt', 'utf8');
// //   })
// //   .then(data => {
// //     console.log(data.toString());
// //   });


// {
//   const promisify = fn => (...args) => new Promise((resolve, reject) => {
//     args.push((a, b) => {
//       if (a + b > 0) resolve(a + b);
//       else reject(a + b);
//     });
//     fn(...args);
//   });

//   const sum = (a, b, ms, callback) => setTimeout(callback, ms, a, b);

//   const CalclulateSum = promisify(sum);

//   CalclulateSum(-10, -10, 3000)
//     .then(data => console.log(data), err => console.log(err));
// }




// {

//   const test3 = (phrase, callback) => {
//     if (phrase.length >= 5) callback(null, phrase);
//     else callback(new Error('Меньше 5 символов'));
//   };

//   //const loadingTest3 = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

//   const promisify = fn => (...args) => new Promise((resolve, reject) => {
//     args.push((err, res) => {
//       if (err) reject(err);
//       else resolve(res);
//     });
//     setTimeout(fn, 3000, ...args);
//   });

//   const loadPromiseTest3 = promisify(test3);

//   loadPromiseTest3('123')
//     .then(data => console.log(data, 'Markov'))
//     .catch(err => console.log(err));

// }
// //6-fetch

// const http = require('http');
// const { url } = require('inspector');

// const fetch = url => new Promise((resolve, reject) => {
//   http.get(url, res => {
//     const code = res.statusCode;
//     if (code !== 200) {
//       return reject(new Error(`HTTP status code ${code}`));
//     }
//     res.on('error', reject);

//     const chunks = [];

//     res.on('data', chunk => {
//       chunks.push(chunk);
//     });


//     res.on('end', () => {
//       const json = Buffer.concat(chunks).toString();
//       try {
//         const object = JSON.parse(json);
//         resolve(object);
//       } catch (error) {
//         return reject(error);
//       }
//     });
//   });
// });


// {
//   const promise = fetch('/article/promise-chaining/user.json');
//   promise
//     .then(response => alert(response.text()));
// }

const user = {
  name: 'Ch1ChaGl',
};

const MyAc = obj => new Promise((resolve, reject) => {
  setTimeout(() => resolve(JSON.stringify(obj)), 3000);
});

MyAc(user)
  .then(response => JSON.parse(response))
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(GitHubUser => {
    const img = document.createElement('img');
    img.src = GitHubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);
    setTimeout(() => img.remove(), 3000);
  });


const arr = ['danil', 'danil2'];

arr.forEach((el, i, arr2) =>
  arr2[i] = 'test'
);

console.log(arr);
for (let i = 0, j = 500; i < 3; i++, j -= 100) {
  setTimeout(() => console.log(i), i + (1000 + j));
}


