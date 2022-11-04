'use strict';
// const basket = {
//     Laptop:1500,
//     Keyboaed:100,
//     HDMI:10,
// };


// basket['Mouse']=25;
// console.log(basket);

// const key = 'Test';
// basket[key]=50;
// console.log(basket);


// delete basket.Keyboaed;
// console.log(basket);


// const goods = {
//     Test1:15,
//     Test2:30,
//     Test3:40,
// }

// const order = {...basket,...goods}; //слияние объектов
// console.log(order);

//Можно  собрать из частей
// /*{...basket,test:50,test2:30}
// {test:50,test2:30,...basket} */

// Примесь (mixin)
// const calculateTotal = (obj) =>{
//     let total = 0;
//     for(const key of Object.keys(obj)){
//         total+= obj[key];
//     }
//     return total;
// }
//Плохой вариант примеси
// const mixTotal = (obj) => {
//     obj.total = calculateTotal(obj);
// }

//mixTotal(basket);
//console.log(basket);



//Так будет лучше
// const addTotal = (obj)=>{
//     return{...obj,total: calculateTotal(obj)};
// };

// const order1 = addTotal(basket);
// console.log(order1);
// console.log(basket);

//Еще лучше разделить поля

// const goodsTotal = (goods) =>{
//     return {goods,total:calculateTotal(goods)};
// }
// const order3 = goodsTotal(basket);
// console.log(order3);
// console.log(order3.goods);


// const purchase = {
//     Electonics:[
//         {name: 'Laptop',price:1500},
//         {name: 'Keyboard',price:100},
//         {name: 'HDMI cable',price:10},
//     ],
//     Textile:[
//         {name: 'Bag', price:50},
//     ],
// };


// console.log({purchase});

// console.dir(purchase, { depth: null });

// console.log(JSON.stringify(purchase));






// const fruit = 'apple2';

// const bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log(bag.apple); // 5, если fruit="apple"
// console.log(bag.apple2);// 5, если fruit="apple2"


// const fruit = prompt('Какой фрукт купить?', 'apple');
// const bag = {};

// имя свойства будет взято из переменной fruit
// bag[fruit] = 5;

// function makeUser(name, age) {
//   return {
//     name,
//     age
// ...другие свойства
//   };
// }

// const user = makeUser('John', 30);
// alert(user.name); // John


const user = new Object();

user.name = 'John';
user.surename = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);



const isEmpty = obj => {
  for (const key in obj) {
    return false;
  }
  return true;
};
const schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));





const sum = obj => {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
};


const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
console.log(sum(salaries));


const test = {};
console.log(sum(test));


const menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
console.log(menu);

const multiplyNumeric = obj => {
  for (const key in obj) {
    if (typeof(obj[key]) === 'number') {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);



const username = {
  name: 'John',
  age: 30,
  sayHi(name) {
    // "this" - это "текущий объект".
    console.log(this.name + name);
  }
};

// username.SayHi = () => {
//   console.log('Привет');
// };

// username.SayHi();

username.sayHi('test');


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?


const calculator = {
  read(a, b) {
    /* Тут мы как бы создаем поля у
    объекта и туда передаем значение*/
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(2, 3);
console.log(calculator.sum());
console.log(calculator.mul());

calculator.read(4, 5);
console.log(calculator.sum());
console.log(calculator.mul());


const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
//Так как при вызове функции без return this мы бы прсто вызвали функцию,
//в которой нет ссылки на наш оюъект и мы бы не
// смоглм бы вызвать у нее же метод,
//Но так как мы возвращаем объект, то у него мы можем вызвать его же метод.
