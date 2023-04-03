'use strict';

function findBigest(arr) {
  let bigest = arr[0];
  let bigestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigest) {
      bigest = arr[i];
      bigestIndex = i;
    }
  }
  return bigestIndex;
}

function seletionSort(arr) {
  const newArr = [];
  while (arr.length) {
    const smallest = findBigest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
}

console.log(seletionSort([5, 3, 6, 2, 10]));
