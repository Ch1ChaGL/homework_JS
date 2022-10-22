'use strict'
/* Задача 1. Возьмем пример, который мы уже рассматривали, но в него добавлено несколько ошибок. 
Скопируйте этот код в отдельный файл и исправьте его, чтобы он не только работал, но был красивым и понятным. За эталон можно брать код из книги и лекций.*/

const items = [
    {price: 40 },
    {price: 120},
    {price: 505},
    {price: 350 }
]; 
// for(const item of items){
//   console.log(`Price: ${item.price}`);
//   }


/*Задача 2. Теперь давайте сделаем функцию, которая вычислит сумму всей покупки. Дайте функции понятное название и добавьте такие правила: нужно проверять, является ли цена числом (при помощи typeof), суммируем только положительные цены, а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.

В ходе выполнения задания, поищите в интернете документацию по for..of, throw, condole.log, функциям и массивам. Лучше всего искать в MDN (mozilla developers network).

Добейтесь, чтобы код запускался в командной строке через node.js или в браузере.*/
const goods = [
    { name:"Laptop", price: 100},
    { name:"Mouse", price: 200},
    { name:"HDMI", price: 300},
    { name:"DVI", price: 400},
];

const calculateTotal = (goods) =>{
let total = 0;
for(const item of goods){
    if(typeof(item.price)=='number' && item.price>0){
        total+=item.price;
    }
     throw "Число не то";
}
return total;
};


console.log(calculateTotal(goods));

// const goods = [
//     { name: 'Laptop', price: 1500},
//     { name: 'Mouse', price: 100},
//     { name: 'HDMI', price: 150},
//     { name: 'Telephone', price: 1200},
// ];