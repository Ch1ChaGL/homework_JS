'use strict';


const { rejects } = require('assert');
const { resolve } = require('path');
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

async function calc() {
  const a = await readLine('Введите значение а');
  const b = await readLine('Введите значение b');
  return parseInt(a) + parseInt(b);
}


calc().then(data => { console.log(data); rl.close(); });





