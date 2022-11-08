'use strict';
const str = 'Привет';

console.log(str.toUpperCase()); // ПРИВЕТ


const num = 1.23456;

console.log(num.toFixed(2)); // 1.23


//Конструкторы String/Number/Boolean предназначены только
//для внутреннего пользования


//null/undefined не имеют методов


const str2 = 'Привет';

// str2.test = 5;

console.log(str2.test);

//Данный пример наглядно показывает, что примитивы не являются объектами.

//Они не могут хранить дополнительные данные.


const billion = 7.3e9;  // 1 миллиард, буквально: 1 и 9 нулей

console.log(billion);  // 7.3 миллиардов (7,300,000,000)
const ms = 1e-6; // шесть нулей, слева от 1
console.log(ms);


//Шестнадетеричное число
console.log(0xff); // 255
console.log(0xFF); // 255 (то же самое, регистр не имеет значения)


//Двочиное и 8ричное число

const a = 0b11111111; // бинарная форма записи числа 255
const b = 0o377; // восьмеричная форма записи числа 255

console.log(a === b); // true, с двух сторон число 255



const num2 = 255;

console.log(num2.toString(16));  // ff
console.log(num2.toString(2));   // 11111111


const table = {
  '3,1': {
    'Math.floor': 3,
    'Math.ceil': 4,
    'Math.round': 3,
    'Math.trunc': 3,
  },
  '3.6': {
    'Math.floor': 3,
    'Math.ceil': 4,
    'Math.round': 4,
    'Math.trunc': 3,
  },
  '-1.1': {
    'Math.floor': -2,
    'Math.ceil': -1,
    'Math.round': -1,
    'Math.trunc': -1,
  },
  '-1.6': {
    'Math.floor': -2,
    'Math.ceil': -1,
    'Math.round': -2,
    'Math.trunc': -1,
  },
};


for (const key of Object.keys(table)) {
  const table2 = table[key];
  for (const keys of Object.keys(table[key])) {
    console.log(`Число: ${key} c функцией ${keys}
имеет значение ${table2[keys]} `);
  }
}


//Если нужно округлить до n-ого числа

const num3 = 1.23456;

console.log(Math.floor(num3 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23


//или метод toFixed(n);
console.log(num3.toFixed(4));
//Округляет значение до ближайшего числа, как в
//большую, так и в меньшую сторону, аналогично методу
//результатом toFixed является строка.
//Мы можем преобразовать полученное значение в число,
//используя унарный оператор + или Number(),
//пример с унарным оператором: +num.toFixed(5).


const sum = 0.1 + 0.2;
//На самом деле не равно 0.3 а равно почти 0.3 с 4 далеко справа
//Это происходит из-за хранения чисел по специальному стандарту
//Вот путь решения
console.log(+sum.toFixed(2));


// Object.is сравнивает значения примерно как ===,
// но более надёжен в двух особых ситуациях:
// Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
// Значения 0 и -0 разные: Object.is(0, -0) === false,

//parseInt and parseFloat

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, вернётся только целая часть
console.log(parseFloat('12.3.4'));
//12.3, произойдёт остановка чтения на второй точке


//Для работ с другими системами счисления
//console.log(parseInt('0xff', 16)); // 255
//У меня ругается линтер на парсинт и парсфлот
console.log(0xff); // 255, без 0x тоже работает

console.log(parseInt('2n9c', 36)); // 123456, кроме этого, на это не ругается

