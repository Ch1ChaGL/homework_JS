'use strict';

//1

const greet = (name, year) => {
  console.log(`Привет ${name} , год рождения ${year} `);
};
const name = 'Данил';
const YEARS = 1052004;


greet(name, YEARS);


//2

const range = (strat, end) => {
  const len = end - strat;
  if (len < 0) return [];
  const array = new Array(len);
  for (let i = strat; strat <= end; strat++) {
    array[i] = strat;
    console.log(array[i]);
  }
  return array;
};

range(10, 20);

const rangeOdd = (start, end) => {
  const len = Math.ceil((end - start) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = start; start <= end; start++) {
    if (n % 2 !== 0) array[i++] = n;
  }
  return array;

};

rangeOdd(10, 20);

//3
