'use strict';



function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.slow = function() {
    console.log(this.x + this.y);
  };
}


Point.prototype.move = function(x, y, z) {
  this.x += x;
  this.y += y;
  this.z += z;
  return x + y + z;
};

Point.prototype.toString = function() {
  console.log(`x: ${this.x}  y: ${this.y} z: ${this.z} `);
};
//const p2 = new Point(3, 4, 5);
const p1 = new Point(2, 3, 4);

function hash(...arr) {
  return arr.map(x => x + '').reduce((a, b) => a + b);
}


function decorator(func, hash) {
  const cache = new Map();
  return function(...args) {
    const key = hash(...args);
    if (cache.has(key)) return cache.get(key);

    const result = func.call(this, ...args);
    cache.set(key, result);

    return result;
  };
}


p1.move = decorator(p1.move, hash);



p1.toString();
console.log(p1.move(2, 3, 4));
p1.toString();
console.log(p1.move(2, 3, 4));
p1.toString();



