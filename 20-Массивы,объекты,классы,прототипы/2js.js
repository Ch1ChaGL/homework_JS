'use strict';
//Класс
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  toString() {
    return `[${this.x},${this.y}]`;
  }
  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

//У всех объектов класса Point будут метод move, у которого есть функция Hellow
Point.prototype.move.Hellow = function() {
  console.log('Hello');
};

console.log('Point prototype:', Point.prototype);
console.log('Constructor prototype:', Point.constructor.prototype);
console.log('Move prototype:', Point.prototype.move.prototype);
console.log('prototype constructor prototype:',
  Point.prototype.constructor.prototype);


const p1 = new Point(20, 30);

const b = Point.from(p1);
console.log(b);
console.log(p1);
console.log(b);
console.log(p1);
console.log(b);
console.log(b === p1);

p1.move.Hellow();


//При помощи замыкания организованы поля x,y и возвращается объект с функциями
//Которые имеют доступ к переменным x и y
//Но из вне мы их посмотреть не можем
{
  const point = (x, y) => {
    const p = {};
    p.move = (dx, dy) => {
      x += dx;
      y += dy;
    };
    p.toString = () => `[${x}, ${y}]`;
    return p;
  };
  const p1 = point(10, 20);
  p1.move(-5, 10);
  console.log(p1);
  console.log(p1.toString());
}

function move(x, y) {
  this.x += x;
  this.y += y;
}
function toString() {
  return `[${this.x}, ${this.y}]`;
}
{
  const p1 = { x: 10, y: 20 };
  const p1move = move.bind(p1); //связываем функцию с объектом
  const p1toString = toString.bind(p1);
  p1move(-5, 10);
  console.log(p1);
  console.log(p1toString());
}


console.log(Point.constructor.prototype === Function.prototype);
/*Так как сам по себе Point это конструктор, переходим по полю конструктор
по итогу конструктор конструктора является прототипом функции */


console.log(Point.constructor.prototype.__proto__ === Object.prototype);
/*А то от чего унаследовал прототип функции является прототип объекта */
