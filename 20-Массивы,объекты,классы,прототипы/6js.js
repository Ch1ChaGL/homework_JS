'use strict';

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side); //Наследлвания Square от Rect
}

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// const x = new Square(2, 3, 4);


Object.setPrototypeOf(Square.prototype, Rect.prototype);
const p1 = new Square(10, 20, 50);
//const p2 = new Rect(10, 30, 40, 50);
console.log(p1.toString());
