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
