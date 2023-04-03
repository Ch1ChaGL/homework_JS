'use strict';

//Напишите код для функции sum используя разделяй и влавствуй
const sum = (...args) => {
  if (args.length === 1 || args.length === 0)
    return args.length === 0 ? 0 : args[0];
  return args.shift() + sum(...args);
};

console.log(sum(2, 3, 4));

//Напишите рекурсивную функцию для подсчета элементов в списке
const list1 = {
  value: 100,
};

list1.next = { value: 2 };
list1.next.next = { value: 9 };
list1.next.next.next = { value: 5 };
list1.next.next.next.next = { value: 8 };

const countElementOnList = list => {
  if (!list.next) return 1;
  return 1 + countElementOnList(list.next);
};

console.log(countElementOnList(list1));

//Найдите наибольший элемент в списке
const bigInList = list => {
  if (!list.next) return list.value;
  const subMax = bigInList(list.next);
  return list.value > subMax ? list.value : subMax;
};

console.log(bigInList(list1));

//Бинарный поиск с использованием разделяй и влавствуй

function binarySearch(list, item, low = 0, high = list.length - 1) {
  let answer;
  if (low > high) return false;
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];
  if (guess === item) return mid;
  if (guess > item) answer = binarySearch(list, item, low, mid - 1);
  else {
    answer = binarySearch(list, item, mid + 1);
  }
  return answer;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

const quickSort = arr => {
  if (arr.length < 2) return arr;
  else {
    const pivot = arr[0];
    const less = arr.filter(elem => elem < pivot);
    const greater = arr.filter(elem => elem > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

console.log(quickSort([10, 5, 2, 3]));
