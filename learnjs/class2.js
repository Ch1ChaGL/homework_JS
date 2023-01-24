'use strict';


class Point {
  #test = 'test passed';
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  test() {
    return this.#test;
  }
}

class TestPoint extends Point {
  constructor(x, y) {
    super(x, y);
  }
}


const p1 = new TestPoint(2, 3);

console.log(p1.test());
