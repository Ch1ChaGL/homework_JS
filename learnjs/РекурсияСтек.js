'use strict';


//Рекурсивное возведение в ступень


function pow(x, n) {
  return (n === 1) ? x : x * pow(x, n - 1);
}

console.log(pow(2, 4));


//pow(2, 4) = 2 * pow(2, 3)
//pow(2, 3) = 2 * pow(2, 2)
//pow(2, 2) = 2 * pow(2, 1)
//pow(2, 1) = 2

//Нужно посчитать сумму зарплат с помощью рекурсии
// eslint-disable-next-line no-unused-vars
const company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};


// eslint-disable-next-line no-unused-vars
function sumSal(department) {
  if (Array.isArray(department)) return department.reduce((acum, cur) =>
    acum + cur.salary);
  else {
    let sum = 0;
    for (const salary of Object.values(department)) {
      sum += sumSal(salary);
    }
    return sum;
  }
}


const list = { value: 1 };

list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };



//Реализация суммирования списка

function sumInList(node) {
  let sum = 0;
  if ('next' in node) {
    sum = node.value + sumInList(node.next);
    return sum;
  }
  return node.value;
}



// function sumInList(node) {
//   if ('next' in node) {
//     return;
//   }
//   return node.value;
// }

// const sumInList = node =>
//   (('next' in node) ? (node.value + sumInList(node.next)) : node.value);


console.log(sumInList(list));


// function sumTo(n) {
//   if (n === 1) return 1;
//   return n + sumTo(n - 1);
// }


const sumTo = n => (n === 1 ? 1 : n + sumTo(n - 1));

console.log(sumTo(100));

const fuct = n => (n === 1 ? 1 : n * fuct(n - 1));

console.log(fuct(5));

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));


function printList(node) {
  if ('next' in node) {
    console.log(node.value);
    printList(node.next);
  } else {
    console.log(node.value);
  }
}

printList(list);

function printoutList(node) {
  if (!('next' in node)) {
    console.log(node.value);
  } else {
    printoutList(node.next);
    console.log(node.value);
  }
}
printoutList(list);


