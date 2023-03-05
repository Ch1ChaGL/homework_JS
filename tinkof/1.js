'use strict';



const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promisify = fn => (...args) => new Promise((resolve, reject) => {
  args.push((data, err) => {
    if (err) reject(err);
    resolve(data);
  });
  fn(...args);
});

const rlQuestion = promisify(rl.question.bind(rl));

async function readLine(question) {
  const answer = await rlQuestion(question);
  return answer;
}

function allContains(subString) {
  return subString.includes('a') &&
  subString.includes('b') && subString.includes('c') && subString.includes('d');
}

async function main() {
  const stringLength = parseInt(await readLine('Введите длинну строки: '));
  const isString = await readLine('Введите строку: ');

  if (allContains(isString)) {
    let minLength = stringLength;
    for (let i = 0; i < stringLength; i++) {
      for (let j = 0; j < stringLength - i; j++) {

        const subStr = isString.substring(i, j);

        if (allContains(subStr)) {
          minLength = Math.min(minLength, subStr.length);
        }

      }
    }
    return minLength;
  }
  return -1;
}


main().then(data => { console.log(data); rl.close(); });





