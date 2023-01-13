'use strict';

//  1
// function generateHashtag(str) {
//   const arrStr = str.split(' ');
//   console.log(arrStr);
//   arrStr.forEach((element, i, arr) => {
//     if (!str) return false;
//     if (element !== '')
//       arr[i] = element[0].toUpperCase() + element.slice(1);
//   });
//   console.log(arrStr);
//   const answer = arrStr.join('');
//   if (answer.length < 1 || answer.length > 139 ||
//     answer[0] === '#') return false;
//   return '#' + answer;
// }



// function generateHashtag(str) {
//   let answer = str.replace(/\s+/g, ' ').trim().split(' ');
//   answer.forEach((element, i, arr) => {
//     if (!element || element === '') return false;
//     arr[i] = element[0].toUpperCase() + element.slice(1);
//   });
//   answer = answer.join('');
//   if (answer.length < 1 || answer.length > 139 ||
//              answer[0] === '#') return false;
//   return '#' + answer;
// }


// console.log(generateHashtag('  '));



// 2

// function goodVsEvil(good, evil) {
//   let goodcCount = 0;
//   let evilCount = 0;
//   const goodRace = {
//     '0': 1,
//     '1': 2,
//     '2': 3,
//     '3': 3,
//     '4': 4,
//     '5': 10,
//   };
//   const evilRace = {
//     '0': 1,
//     '1': 2,
//     '2': 2,
//     '3': 2,
//     '4': 3,
//     '5': 5,
//     '6': 10,
//   };
//   const arrOfGood = good.split(' ').map(element => +element);
//   const arrOfEvil = evil.split(' ').map(element => +element);
//   arrOfGood.forEach((element, i, arr) => {
//     if (arr[i] !== 0)
//       goodcCount += goodRace[i] * element;
//   });
//   arrOfEvil.forEach((element, i, arr) => {
//     if (arr[i] !== 0)
//       evilCount += evilRace[i] * element;
//   });
//   return evilCount === goodcCount ?
//     'Battle Result: No victor on this battle field' :
//     (evilCount > goodcCount ?
//       'Battle Result: Evil eradicates all trace of Good' :
//       'Battle Result: Good triumphs over Evil');
// }

// console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));

// 3
// const trim = arr => {
//   const newArr1 = [];
//   for (let i = 0, j = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] === 'NORTHSOUTH' ||
//     arr[i] + arr[i + 1] === 'SOUTHNORTH' ||
//     arr[i] + arr[i + 1] === 'EASTWEST' ||
//     arr[i] + arr[i + 1] === 'WESTEAST'
//     ) {
//       i++;
//       continue;
//     }
//     newArr1[j] = arr[i];
//     j++;
//   }
//   return newArr1;
// };

// function dirReduc(arr) {
//   let newArr1 = [];
//   newArr1 = trim(arr);
//   newArr1 = trim(newArr1);
//   return newArr1;
// }



// console.log(
//   dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH'])
// );


// const lastDigit = (a, b) => +Math.pow(a, b).toString().slice(-1);
// const lastDigit = function(str1, str2) {
//   let a = +str1;
//   let b = +str2;
//   if (isNaN(a)) a = 0;
//   if (isNaN(b)) b = 0;
//   let answer = (a ** b);
//   answer += '';
//   answer = answer.substring(answer.length - 1);
//   return +answer;
// };
// console.log(lastDigit('b', '1'));

// const allRoman  = {
//   '+1000': 'M',
//   '+900': 'CM',
//   '+500': 'D',
//   '+400': 'CD',
//   '+100': 'C',
//   '+90': 'XC',
//   '+50': 'L',
//   '+40': 'XL',
//   '+10': 'X',
//   '+9': 'IX',
//   '+5': 'V',
//   '+4': 'IV',
//   '+1': 'I',
// };
// const allArab  = {
//   'M': '1000',
//   'CM': '900',
//   'D': '500',
//   'CD': '400',
//   'C': '100',
//   'XC': '90',
//   'L': '50',
//   'XL': '40',
//   'X': '10',
//   'IX': '9',
//   'V': '5',
//   'IV': '4',
//   'I': '1',
// };
// const RomanNumerals  = {
//   toRoman(num) {
//     let roman = '';
//     while (num > 0) {
//       for (const key in allRoman) {
//         while (num >= key) {
//           roman += allRoman[key];
//           num -= +key;
//         }
//       }
//     }
//     return roman;
//   },
//   fromRoman(str) {
//     let arab = 0;
//     for (const key in allArab) {
//       while (str.startsWith(key)) {
//         arab += +allArab[key];
//         str = str.replace(key, '');
//       }
//     }
//     return arab;
//   }
// };



// console.log(RomanNumerals.fromRoman('IV'));



// function zero(arg) {
//   const a = 0;
//   if (!arg) return a;
//   return arg(a);
// }
// function one(arg) {
//   const a = 1;
//   if (!arg) return a;
//   return arg(a);
// }
// function two(arg) {
//   const a = 2;
//   if (!arg) return a;
//   return arg(a);
// }
// function three(arg) {
//   const a = 3;
//   if (!arg) return a;
//   return arg(a);
// }
// function four(arg) {
//   const a = 4;
//   if (!arg) return a;
//   return arg(a);
// }
// function five(arg) {
//   const a = 5;
//   if (!arg) return a;
//   return arg(a);
// }
// function six(arg) {
//   const a = 6;
//   if (!arg) return a;
//   return arg(a);
// }
// function seven(arg) {
//   const a = 7;
//   if (!arg) return a;
//   return arg(a);
// }
// function eight(arg) {
//   const a = 8;
//   if (!arg) return a;
//   return arg(a);
// }
// function nine(arg) {
//   const a = 9;
//   if (!arg) return a;
//   return arg(a);

// }

// const  plus = a => b =>  b + a;

// const minus = a => b => b - a;
// const times = a => b => b * a;
// const dividedBy = a => b => parseInt(b / a);

// console.log(nine(dividedBy(two())));

//Ступил немного, мог бы полностью сам решить,но чето
//немного затупил, выбрал путь решения правильный,
//но забыл вообще как пользоваться,ну или не умею еще пока что сходу видеть


//Почему такое задание находится на 4 кате,
//а задание с функциями которые вложены,
//и все такое, где надо головой подумать, только на 6 кате
// function sumStrings(a, b) {
//   const num1 = BigInt(a);
//   const num2 = BigInt(b);
//   return (num1 + num2) + '';
// }


// function solution(list) {
//   const newArr = [];
//   let tempArr = [];
//   let j = 1;
//   for (let i = 0; i < list.length + 1; i++) {
//     if (list[i] - list[i - 1] === 1) {
//       tempArr[j - 1] = list[i - 1];
//       tempArr[j] = list[i];
//       j++;
//       continue;
//     }
//     if (tempArr[0] === undefined)
//       list[i] !== undefined ? newArr.push(list[i]) : newArr + '';
//     else {
//       newArr.pop(newArr.length - 1);
//       let tempArr2 = [];
//       if (tempArr.length < 3) newArr.push(tempArr);
//       else {
//         tempArr2.push(tempArr[0]);
//         tempArr2.push(tempArr[tempArr.length - 1]);
//         newArr.push(tempArr2.join('-'));
//       }
//       tempArr = [];
//       tempArr2 = [];
//       j = 1;
//       i--;
//     }
//   }
//   return newArr + '';
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7,
//   8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

//Видел как решают намного быстрее через reduce, неплохой выбор решения


// function humanReadable(seconds) {
//   const newArr = [];
//   const s = seconds % 60;
//   seconds /= 60;
//   const m = seconds % 60;
//   seconds /= 60;
//   const h = seconds;
//   newArr.push((Math.floor(h)) + '');
//   newArr.push((Math.floor(m)) + '');
//   newArr.push((Math.floor(s)) + '');
//   for (const i in newArr) {
//     if (newArr[i].length < 2)
//       newArr[i] = '0' + newArr[i];
//   }
//   return newArr.join(':');
// }

// console.log(humanReadable(86400));


// function add(a, b) {
//     return a + b;
//   }
//   const a = 1;
//   const b = 2;
//   const sumt = a + b;


//   const curryPartial = (fn, ...par) => {
//     const curried = (...args) =>
//       (fn.length > args.length ?
//         curryPartial(fn.bind(null, ...args)) :
//         fn(...args));
//     if(par.length === 0 && fn.length === 0) return fn();
//     return  (par.length  ? curried(...par) : curried);
//   };


//   console.log(add(a, b) === sumt);
//   console.log(curryPartial(add)(a)(b) === sumt);
//   console.log(curryPartial(add, a, b) === sumt);
//   console.log(curryPartial(add, a, b, 20) === sumt);
//   console.log(curryPartial(add)(a, b) === sumt);
//   console.log(curryPartial(add)()(a, b) === sumt);
//   console.log(curryPartial(add)()(a)()()(b) === sumt);
//   console.log(curryPartial(add)()(a)()()(b, 5, 6, 7) === sumt);
//   console.log(curryPartial(curryPartial(add, a), b) === sumt);
//   console.log(curryPartial(curryPartial(add, a), b));
//   console.log(curryPartial(add, a), b);

//   console.log(curryPartial(add)(2)());


// let permArr = [],
//   usedChars = [];

// function getVariants(input) {
//   let i, ch;
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length === 0) {
//       permArr.push(usedChars.slice());
//     }
//     getVariants(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr;
// }

// let objanswer = {};
// function nextBigger(n) {
//   const str = n + '';
//   const strArr = [];
//   const razprev = -0.1;
//   let answersol = -1;
//   objanswer = {};
//   for (let i = 0; i < str.length; i++) {
//     strArr[i] = +str[i];
//   }
//   permArr = [];
//   let answer = getVariants(strArr);
//   for (let i = 0; i < answer.length; i++) {
//     const num = +answer[i].join('');
//     const razcur = n - num;
//     if (n - num < 0) {
//       objanswer[num] = razcur;
//     }
//   }
//   let min = -1000000000000000000000;
//   for (const key in objanswer) {
//     if (objanswer[key] > min && objanswer[key] < 0) {
//       min = objanswer[key];
//       answersol = +key;
//     }
//   }
//   objanswer = {};
//   answer = [];
//   return answersol;
// }

// console.log(nextBigger(12));
// console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));

// function nextBigger(n) {
//   const str = n + '';
//   let count = 1;
//   const length = str.length;
//   const arr1 = [];
//   let arr2 = [];
//   const strArr = [];
//   let copyArr = [];
//   for (let i = 0; i < str.length; i++) {
//     strArr[i] = str[i];
//   }
//   while (str.length >= count) {
//     if (str.length - count === 0) {
//       arr1[0] = strArr[1];
//       arr1[1] = strArr[0];
//       if (n - +arr1.join('') < 0) return +arr1.join('');
//       return -1;
//     }
//     for (let i = 0; i < str.length; i++) {
//       arr1[i] = str[i];
//       copyArr[i] = arr1[i];
//     }

//     for (let i = 0, j = 0; i < strArr.length; j++, i++) {
//       if (i >= strArr.length - count) {
//         arr2.push(+arr1[i]);
//         copyArr.splice(j, 1);
//         j--;
//       }
//     }
//     let arr3 = [];
//     while (arr2.length !== 0) {
//       let max = +arr2[0];
//       for (let i = 0; i < arr2.length; i++) {
//         if (max < +arr2[i]) max = +arr2[i];
//       }
//       for (let i = 0; i < arr2.length; i++) {
//         if (+arr2[i] === max) {
//           arr3.push(+arr2[i]);
//           arr2.splice(i, 1);
//         }
//       }
//     }
//     const answer = +(copyArr.join('') + arr3.join(''));
//     if (n - answer < 0) return answer;
//     count++;
//     arr2 = [];
//     arr3 = [];
//     copyArr = [];
//   }
//   return -1;
// }


// console.log(nextBigger(144));
// while (arr1.length !== 0) {
//     let max = +arr1[0];
//     for (let i = 0; i < arr1.length; i++) {
//       if (max < +arr1[i]) max = +arr1[i];
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       if (+arr1[i] === max) {
//         arr2.push(+arr1[i]);
//         arr1.splice(i, 1);
//       }
//     }
//   }






// function nextBigger(n) {
//   const str = n + '';
//   let arr1 = [];
//   for (let i = 0; i < str.length; i++) {
//     arr1[i] = +str[i];
//   }
//   arr1 = arr1.reverse();
//   for (let i = 1; i < arr1.length - 1; i++) {
//     for (let j = 1; j < arr1.length; j++) {
//       if (arr1[j] < arr1[j - 1]) {
//         const temp = arr1[j];
//         arr1[j] = arr1[j - 1];
//         arr1[j - 1] = temp;
//         arr1 = arr1.reverse();
//         return +arr1.join('');
//       }
//     }
//   }
//   if (arr1.length === 2) {
//     if (n === +arr1.join('')) {
//       return -1;
//     }
//     if (n > +arr1.join('')) return -1;
//     return +arr1.join('');
//   }
//   return -1;
// }

// console.log(nextBigger(111));


// function nextPermutation(array) {
//   // Find non-increasing suffix
//   let i = array.length - 1;
//   while (i > 0 && array[i - 1] >= array[i])
//     i--;
//   if (i <= 0)
//     return false;

//   // Find successor to pivot
//   let j = array.length - 1;
//   while (array[j] <= array[i - 1])
//     j--;
//   let temp = array[i - 1];
//   array[i - 1] = array[j];
//   array[j] = temp;

//   // Reverse suffix
//   j = array.length - 1;
//   while (i < j) {
//     temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
//   }
//   return true;
// }
// const arrnew = [1, 5, 3, 4, 6, 5, 3, 1, 2, 5, 5, 9, 2];
// console.log(nextPermutation(arrnew));
// console.log(arrnew);


// const searchMaxIndexOfRight = arr => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i - 1] < arr[i]) return i - 1;
//   }
//   return -1;
// };
// const searchMaxIndexOfMax = (arr, index) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] > arr[index]) return i;
//   }
//   return -1;
// };

// const swap = (arr, inedxI, indexJ) => {
//   const temp = arr[inedxI];
//   arr[inedxI] = arr[indexJ];
//   arr[indexJ] = temp;
//   return arr;
// };
// const reverse = (arr, indexI) => {
//   let tempArr = arr.slice(indexI + 1);
//   tempArr = tempArr.reverse();
//   arr = arr.slice(0, indexI + 1);
//   return arr.concat(tempArr);
// };


// function nextBigger(n) {
//   const str = n + '';
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = +str[i];
//   }
//   const indexI = searchMaxIndexOfRight(arr);
//   const indexJ = searchMaxIndexOfMax(arr, indexI);
//   if (indexJ === -1) return -1;
//   arr = swap(arr, indexI, indexJ);
//   arr = reverse(arr, indexI);
//   return +arr.join('');
// }

// console.log(nextBigger(742));



// function digPow(n, p) {
//   const str = n + '';
//   const arr = [];
//   const pow = p;
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = Math.pow(+str[i], p);
//     p++;
//   }
//   const sum = arr.reduce((acum, current) => acum + current);
//   if (sum < n) return -1;
//   const answer = parseInt(sum / n);
//   return answer * n === sum ? answer : -1;
// }

// function friend(friends) {
//   return friends.filter(element => element.length === 4)
//     .filter(element => {
//       if (isNaN(+element)) {
//         return element;
//       }
//     }
//     );
// }

// console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));



// function persistence(num) {
//   const str = num + '';
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = +str[i];
//   }
//   let count = 0;
//   while (arr.length > 1) {
//     const newArr = [];
//     const sum = arr.reduce((acum, current) => acum * current) + '';
//     for (let i = 0; i < sum.length; i++) {
//       newArr[i] = +sum[i];
//     }
//     arr = newArr;
//     count++;
//   }
//   return count;
// }


// console.log(persistence(39));


// function openOrSenior(data) {
//   let i = 0;
//   const answer = [];
//   data.forEach(element => {
//     if (element[0] >= 55 && element[1] > 7) answer[i] = 'Senior';
//     else answer[i] = 'Open';
//     i++;
//   });
//   return answer;
// }


// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));

// const str = 'How can mirrors be real if our eyes aren\'t real';

// String.prototype.toJadenCase = function() {
//   const arr = this.split(' ');
//   for (const key in arr) {
//     arr[key] = arr[key][0].toUpperCase() + arr[key].slice(1);
//   }
//   return arr.join(' ');
// };

// str.toJadenCase();


// function descendingOrder(n) {
//   const str = n + '';
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = +str[i];
//   }

//   for (let i = 1; i <= arr.length - 1; i++) {
//     for (let j = 1; j <= arr.length - 1; j++) {
//       if (arr[j - 1] < arr[j]) {
//         const temp  = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return +arr.join('');
// }


// console.log(descendingOrder(123));


// function getSum(a, b) {
//   if (a < b) {
//     let count = a;
//     let sum = 0;
//     while (count <= b) {
//       sum += count;
//       count++;
//     }
//     return sum;
//   } else {
//     let count = a;
//     let sum = 0;
//     while (count >= b) {
//       sum += count;
//       count--;
//     }
//     return sum;
//   }
// }
// console.log(getSum(0, -2));


// function findShort(s) {
//   const arr = s.split(' ');
//   let length = arr[0].length;
//   arr.forEach(element => {
//     if (element.length < length) {
//       length = element.length;
//     }
//   });
//   return length;

// }

// function isPangram(string) {
//   const alph = 'absdefghiklmnopqrsuvwxyz';
//   const lower = string.toLowerCase();
//   for (let  i = 0; i < alph.length; i++) {
//     if (lower.indexOf(alph[i]) === -1) return false;
//   }
//   return true;
// }

// isPangram('Hello');

// function reverseWords(str) {
//   if (str.length === 0) return '';
//   const arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     const arr2 = arr[i].split('').reverse();
//     arr[i] = arr2.join('');
//   }
//   return arr.join(' ');
// }


// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// const a1 = [5, 5, 2, 7, 8, 4, 5, 4, 10, 3, 0, 1, 3, 6, 9, 2, 9, 0, 9, 5];
// const a2 = [4, 1, 64, 36, 100, 4, 81, 16,
// 81, 81, 49, 0, 9, 25, 25, 25, 16, 0, 25, 9];

// function comp(array1, array2) {
//   if (array1  === null || array2 === null) return false;
//   if (array1.length === 0 || array2.length === 0) return false;
//   let answer = true;
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.find(el => el === array1[i] * array1[i]) !== undefined) {
//       const index = array2.indexOf(array1[i] * array1[i]);
//       array2.splice(index, 1);
//       array1.splice(i, 1);
//       i--;
//       answer = true;
//     } else return false;
//   }
//   return answer;
// }

// console.log(comp(a1, a2));


// function highAndLow(numbers) {
//   let arr = numbers.split(' ');
//   arr = arr.map(el => +el);
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }


// highAndLow('1 2 3');


// function towerBuilder(nFloors) {
//   let length = 1;
//   const arr = [];
//   for (let i = 1; i < nFloors; i++) {
//     length += 2;
//   }
//   let lengthFloors = 1;
//   let str = '';
//   for (let i = 0; i < nFloors; i++) {
//     for (let j = 0; j < length; j++) {
//       if (str.length === length) break;
//       if (j === Math.floor((length / 2)) - Math.floor(lengthFloors / 2)) {
//         let count = lengthFloors;
//         while (count > 0) {
//           count--;
//           str += '*';
//         }
//         lengthFloors += 2;
//       } else {
//         str += ' ';
//       }
//     }
//     arr.push(str);
//     str = '';
//   }
//   return arr;
// }



// Но конечно круто , но я сделал без репит,
// можно было бы во много раз проще сделать вот так
// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }
// console.log(towerBuilder(3));

// function validParentheses(parens) {
//   const arr = parens.split('');
//   let count = 0;
//   for (const key in arr) {
//     if (arr[key] === '(') { count++; continue; }
//     if (arr[key] === ')')  { count--; }
//     if (count < 0) return false;
//   }
//   return count === 0;
// }
// console.log(validParentheses('())('));


// function duplicateEncode(word) {
//   const str = word.toLowerCase();
//   let answer = '';
//   const arr = str.split('');
//   arr.forEach(element => {
//     let count = 0;
//     arr.forEach(element2 => { if (element === element2) count++; });
//     if (count !== 1) answer += ')';
//     else answer += '(';
//   });
//   return answer;
// }


// console.log(duplicateEncode('recede'));



// function duplicateCount(text) {
//   const _text = text.toLowerCase();
//   const obj = {};
//   for (let i = 0; i < _text.length; i++) {
//     if (_text[i] in obj) {
//       obj[_text[i]] += 1;
//     } else {
//       obj[_text[i]] = 1;
//     }
//   }
//   let count = 0;
//   for (const key in obj) {
//     if (obj[key] > 1) {
//       count++;
//     }
//   }
//   return count;
// }


// console.log(duplicateCount('abcda'));



// const uniqueInOrder = function(iterable) {
//   let arr = [];
//   if (typeof iterable === 'string') arr = iterable.split('');
//   else { arr = iterable; }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return arr;
// };


// console.log(uniqueInOrder('Aaaa4'));

/*of course, I could have solved it differently,
and before I know the answer, I could also simplify this
 code by replacing foreach with another loop, and indeed take it and put all
the words in the directory and just glue them together
 then in one line, but i just wanted
 to solve this assignment with bubble sort */
/*I saw the solution and only then remembered that js has a sort method */

// function order(words) {
//   const arr = words.split(' ');
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//       let current = 0;
//       let prev = 0;
//       numbers.forEach(el => {
//         let index = 0;
//         if (arr[j].indexOf(el) !== -1) {
//           index = arr[j].indexOf(el);
//           current = +arr[j][index];
//         }
//         if (arr[j - 1].indexOf(el) !== -1) {
//           index = arr[j - 1].indexOf(el);
//           prev = +arr[j - 1][index];
//         }
//       });
//       if (current < prev) {
//         const temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr.join(' ');
// }

// console.log(order('Er3nst J2amila F5iona Igo4r B6ob Heid1i'));
// const str = 'Thi3s';
// console.log(str.indexOf('3', '2', '3', '4', '5', '6', '7', '8', '9'));


//Блин реально намного быстрее, только не сразу понял, почему там вычитание,
//но потом в документации прочел почему

// function order(words) {
//   return words.split(' ')
//     .sort((a, b) =>  a.match(/\d/) - b.match(/\d/)).join(' ');
// }

// console.log(order('Er3nst J2amila F5iona Igo4r B6ob Heid1i'));


// const min = function(list) {

//   return Math.min(list);
// };

// const max = function(list) {

//   return Math.max(list);
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));




// const alphabet = {
//   A: 1,
//   B: 2,
//   C: 3,
//   D: 4,
//   E: 5,
//   F: 6,
//   G: 7,
//   H: 8,
//   I: 9,
//   J: 10,
//   K: 11,
//   L: 12,
//   M: 13,
//   N: 14,
//   O: 15,
//   P: 16,
//   Q: 17,
//   R: 18,
//   S: 19,
//   T: 20,
//   U: 21,
//   V: 22,
//   W: 23,
//   X: 24,
//   Y: 25,
//   Z: 26,
// };
// function alphabetPosition(text) {
//   const arr = text.toUpperCase().replace(' ', '').split('');
//   const answerArr = [];
//   arr.forEach(element => {
//     if (element in alphabet) {
//       answerArr.push(alphabet[element]);
//     }
//   });
//   return answerArr.join(' ');
// }

// console.log(alphabetPosition('abcd  ,efg ,hik '));

// function SeriesSum(n) {
//   if (n === 0) return '0.00';
//   let x = 4;
//   let answer = 1;
//   let count = 1;
//   while (count < n) {
//     count++;
//     answer += (1 / x);
//     x += 3;
//   }
//   answer = answer.toFixed(2);
//   return answer + '';
// }

// console.log(SeriesSum(2));



// function deleteNth(arr, n) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in obj) obj[arr[i]] += 1;
//     else obj[arr[i]] = 1;
//     if (obj[arr[i]] > n) { arr.splice(i, 1); i--; }
//   }
//   return arr;
// }

// console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3));

// function validatePIN(pin) {
//   return !!(pin.match(/^\d{4}$/) || pin.match(/^\d{6}$/));
// }

// function sumArray(array) {
//   if (!array || array.length < 3) return 0;
//   const min  = Math.min(...array);
//   const max  = Math.max(...array);
//   let sum = 0;
//   array.forEach(element => {
//     if (element < max || element > min) sum += element;
//   });
//   return sum - max - min;
// }

// function abbrevName(name) {
//   const arr = name.split(' ');
//   return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase();
// }


// function expandedForm(num) {
//   const arr = num.toString().split('');

// }


// console.log(expandedForm(70304));
// let time = performance.now();

// function findUniq(arr) {
//   const set = new Set(arr);
//   const setTwo = new Set();
//   let nonUniq;
//   for (const value of arr) {
//     if (setTwo.has(value)) {
//       nonUniq = value; break;
//     } else { setTwo.add(value); }
//   }
//   for (const _value of set) {
//     if (_value !== nonUniq) return _value;
//   }
// }

// console.log(findUniq([ 1, 0, 0 ]));
// time = performance.now() - time;
// console.log('Время выполнения = ', time);

// let count = 1;
// console.log(`${count++} sheep...`.repeat(3));

// function binaryToString(binary) {
//   const arr = [];
//   while (binary.length > 0) {
//     const num = parseInt(binary.slice(0, 8), 2);
//     binary = binary.slice(8, binary.length);
//     arr.push(num);
//   }
//   return String.fromCharCode(...arr);
// }

// console.log(binaryToString('001111000011101000101001'));


// function bingo(ticket, win) {
//   let count = 0;
//   for (const miniWin of ticket) {
//     const sort = miniWin[0].split('').sort().join('');
//     if (binarySearch(sort, miniWin[1]) !== false) count++;
//     if (count >= win) return 'Winner!';
//   }
//   return 'Loser!';
// }

// console.log(bingo([['TSAROC', 84], ['WQOSJYCS', 76], ['XVZDMMDX', 88],
//   ['LOMJQG', 88], ['CDTG', 84], ['PE', 89]], 3));

// function binarySearch(list, item) {
//   let low = 0;
//   let high = list.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const guess = list[mid].charCodeAt(0);
//     if (guess === item) return mid;
//     if (guess > item) high = mid - 1;
//     else {
//       low = mid + 1;
//     }
//   }
//   return false;
// }

// function moreZeros(s) {
//   const set = new Set(s);
//   const arr = [];
//   for (const value of set) {
//     const binary = value.charCodeAt(0).toString(2);
//     if (binary.split('')
//     .filter(el => el === '0').length > 3) arr.push(value);
//   }
//   return arr;
// }
// console.log(moreZeros('abcdeabcde'));

// function solution(string) {
//   string = string.split('').map(el => {
//     const num = el.charCodeAt(0);
//     if (num <= 90 && num >= 65) return el = ' ' + el;
//     return el;
//   }).join('');
//   return string;
// }

// console.log(solution('camelCasingTest'));



function wave(str) {
  const result = [];
  for (const key in str) {
    if (key === '0' && str[key] !== ' ')
      result.push(str[key].toUpperCase() + str.slice(key + 1));
    if (str[+key - 1] === undefined) {
      continue;
    }
    if (str[key] === ' ') continue;
    result.push(str.slice(0, key) + str[key].toUpperCase() +
    str.slice(+key + 1));
  }
  return result;
}

console.log(wave(' gap '));
