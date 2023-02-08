'use strict';

const obj = { test: 'test' };

function User() {
  this.name = 'Danil';
  this.state = 'Reject';
}
User.prototype = { constructor: User, admin: false };

const user = new User();
const user2 = new User();
console.log(user.admin);

function Test() {
  this.name = 'Ivan';
  this.state = '1';
}
const test = new Test();

f();
f.call(f);

function f() {
  console.log(this);
}

user2.f = f;
obj.f = f;
user2.f();
obj.f();


const a = true;
const b = true;
console.log(!!a === b);

console.log(20e-1['toString'](2));
20e-1.toString(2);



function MyArray() {

}


MyArray.prototype = [];


const arr = new MyArray();
arr.push(1, 2, 3);


console.log(arr.length);


console.log(MyArray.prototype instanceof  Array);
console.log(arr instanceof Array);
console.log(arr instanceof MyArray);
console.log(0 || 1 && 2 || 3);


console.log('пупкин'.replace('п', 'д'));

function User2() { }
User2.prototype = { admin: false };

const user3 = new User2();

User2.prototype = { admin: true };

console.log(1.15 + 2.30);


const f2 = function(x) {
  console.log(x);
};



(function() {
  f2(1);
})();


const f3 = function g() { return 23; };

console.log(typeof f3());
const a1 = new Array(1, 2), b1 = new Array(3);
console.log(a1[0] + b1[0]);
