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
