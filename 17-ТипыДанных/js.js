'use strict';
const str = 'Привет';

console.log(str.toUpperCase()); // ПРИВЕТ


const num = 1.23456;

console.log(num.toFixed(2)); // 1.23


//Конструкторы String/Number/Boolean предназначены только
//для внутреннего пользования


//null/undefined не имеют методов


const str2 = 'Привет';

str2.test = 5;

console.log(str2.test);

//Данный пример наглядно показывает, что примитивы не являются объектами.

//Они не могут хранить дополнительные данные.
