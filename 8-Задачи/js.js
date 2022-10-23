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
    }else{
     throw "Число не то";}
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



//Задача 3. Возьмите эту структуру данных и дополните ее товарами и 
//группами товаров по примеру тех, которые уже есть:
const purchase = {
    Electronics: [
      { name: 'Laptop', price: 1500 },
      { name: 'Laptop', price: 1000 },
      { name: 'Keyboard', price: 100 },
    ],
    Textile: [{ name: 'Bag', price: 50 }],
  };

const DNS = {
    Household:[
        {name: "Multicooker", price: 1000},
        {name: "Kettle", price:250},
        {name: "Frying pan" ,price:300},
    ],
    Garden:[
        {name:"Chair",price:150},
        { name: 'Laptop', price: 500 },
        {name:"table", price:250},
    ],
};
DNS.Garden.push({name:"dwarf", price:100})
purchase.Electronics.push({name: "mouse",price:50});
purchase.Electronics.push({name: "mouse1",price:50});
const item = purchase.Electronics.pop();
console.log(item);
// const store = Object.assign({},purchase,DNS);
const store = {...purchase,...DNS};
console.log(store);

console.log(...purchase.Electronics,...DNS.Garden);


/*Задача 4. Напишите функцию find, которая будет проходить по структуре из предыдущей задачи и находить товар по его имени (проверяя все группы товаров). Имена могут повторяться, 
но на этот раз нас интересует только первый товар, у которого имя совпало. */

const find = (basket,name)=>{
  for(const key of Object.keys(basket)){
    const items = basket[key];
    for(const item of items){
        if(item.name === name){
            return item;
        }
    }
  } 
};

const result = find(purchase,'Laptop');
console.log(result);

/*Задача 5. Теперь расширим предыдущую задачу: нужно так изменить функцию find, чтобы она возвращала массив, 
содержащий все товары с указанным именем. Если ни одного не нашли, то пустой массив. */

const findFull = (basket,name)=>{
    const result = [];
    for(const key of Object.keys(basket)){
      const items = basket[key];
      for(const item of items){
          if(item.name === name){
              result.push({item});
          }
      }
    } 
    return result;
  };
  const answer = findFull(store,'Laptop');
  console.log(answer);