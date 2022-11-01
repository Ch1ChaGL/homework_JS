'use strict';
const sum = (a, b) => {       //Arrow function expression
  const result = a + b;
  return result;
};

const amount = sum(2, 3);
console.log(amount);

// function sum(a,b){  // Function definition
//     return a+b;
// }

// const sum = function(a,b){ //Function expression
//     return a + b;
// };

// Default parameters Дэфолтные параметры
// const sum = (a=0,b=0) =>{
//     return a+b;
// };
//sum(); returns 0
/*  const sum = (a,b) =>{
    return a+b;
};
    sum(5,3); returns 8
    sum(5); returns NaN
    sum(); returns NaN
*/


//Rest parameters
// const sum = (...args) =>{
//     return args[0]+args[1];
// };

// const sum = (a, ...args)=>{
//     return a+args[0];
// };


//sum - name
//(a,b) - parameters
// (2,3) - arguments

//




