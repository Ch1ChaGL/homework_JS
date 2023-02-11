'use strict';

function counter() {
  let i = 0;
  return () => i++;
}

const id = counter();






console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());


const arr = [1, 8, 9, 3, 5, 2, 6];


console.log(arr.sort((a, b) => b - a));


function map2(arr, callback) {
  return arr.reduce((a, b) => {
    a.push(callback(b));
    return a;
  }, []);
}


const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map(value => value + 1));
console.log(arr2);
console.log(map2(arr2, value => value + ''));
console.log(arr2);

function filter(arr, callback) {
  return arr.reduce((prev, cur) => {
    if (callback(cur)) {
      prev.push(cur);
    }
    return prev;
  }, []);
}



console.log(filter(arr2, value => value % 2 === 0));
