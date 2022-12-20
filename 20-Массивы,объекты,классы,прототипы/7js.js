'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}
Rect.prototype.xd = 300;
Object.prototype.xd3 = 500;
class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
}

const p1 = new Square(10, 20, 30);

console.log(p1.toString());

const p2 = { x: 10, y: 20, width: 50, height: 50 };
//Object.setPrototypeOf(p2, Rect.prototype);
p2.__proto__ = Rect.prototype;
console.log(p2.toString());

const value = p2.xd3;
console.log(value);
//Я не могу блин с этими прототипами, по нормальному не написали блин
//Сиди разбирайся блин


