'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point(10, 20);
console.log(p1);
console.log(p1.__proto__ === Point.prototype);

Point.sayHello = function() {
  console.log('hellow');
};




//Задачки для понимания
const head = {
  glasses: 1
};

const table = {
  pen: 3
};

const bed = {
  sheet: 1,
  pillow: 2
};

const pockets = {
  money: 2000
};


Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(pockets, bed);


console.log(pockets.pen);
console.log(table.prototype === head.prototype); //Тут нет свойста prototype

/*Свойство prototype есть лишь у функций конуструкторов, а поле __proto__
ссылает нас на прототип, или другими словами,
указывает от кого мы прототипно унаследовали */
