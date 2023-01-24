'use strict';



// const promisify = fn => (...args) => new Promise((resolve, reject) => {
//   args.push((err, res) => {
//     if (err) reject(err);
//     else resolve(res);
//   });
//   fn(...args);
// });


// const fs = require('fs');
// const { resolve } = require('path');
// const readFile = promisify(fs.readFile);


// readFile('text1.txt', 'utf8')
//   .then(data => {
//     console.log(data.toString());
//     return readFile('text2.txt', 'utf8');
//   })
//   .then(data => {
//     console.log(data.toString());
//   });


{
  const promisify = fn => (...args) => new Promise((resolve, reject) => {
    args.push((a, b) => {
      if (a + b > 0) resolve(a + b);
      else reject(a + b);
    });
    fn(...args);
  });

  const sum = (a, b, ms, callback) => setTimeout(callback, ms, a, b);

  const CalclulateSum = promisify(sum);

  CalclulateSum(-10, -10, 3000)
    .then(data => console.log(data), err => console.log(err));
}




{

  const test3 = (phrase, callback) => {
    if (phrase.length >= 5) callback(null, phrase);
    else callback(new Error('Меньше 5 символов'));
  };

  //const loadingTest3 = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

  const promisify = fn => (...args) => new Promise((resolve, reject) => {
    args.push((err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
    setTimeout(fn, 3000, ...args);
  });

  const loadPromiseTest3 = promisify(test3);

  loadPromiseTest3('123')
    .then(data => console.log(data, 'Markov'))
    .catch(err => console.log(err));

}
