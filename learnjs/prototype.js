'use strict';

const animal = {
  eats: true,
  walk() {
    console.log('Животное гуляет');
  }
};
const rabbit = {
  jumps: true
};
const longEar = {
  earLength: 10,
  __proto__: rabbit,
};
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();
longEar.walk();
console.log(longEar.jumps); //true из rabbit

{
  const user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  const admin = {
    __proto__: user,
    isAdmin: true
  };
  console.log(admin.fullName);

  admin.fullName = 'Alice Copper';
  console.log(admin.fullName);
}


{
  const animal = {
    eats: true
  };

  const rabbit = {
    jumps: true,
    __proto__: animal
  };


  console.log(Object.keys(rabbit)); //jumps

  for (const prop in rabbit) console.log(prop); //jumps, eats
}





{
  const head = {
    glasses: 1
  };

  const table = {
    pen: 3,
    __proto__: head,
  };

  const bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  const pockets = {
    money: 2000,
    __proto__: bed,
  };
  console.log(pockets.pen);
}


{
  const hamster = {
    stomach: [],

    eat(food) {
      this.stomach.push(food);
      //this.stomach = [food];
    }
  };

  const speedy = {
    stomach: [],
    __proto__: hamster
  };

  const lazy = {
    stomach: [],
    __proto__: hamster
  };

  // Этот хомяк нашёл еду
  speedy.eat('apple');
  speedy.eat('banana');
  console.log(speedy.stomach); // apple

  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log(lazy.stomach); // apple
}


function Point(x, y) {
  this.x = x;
  this.y = y;
  this.sayHi = function() {
    console.log('Hello');
  };
}


Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;

};


const p1 = new Point(2, 3);

p1.sayHi();



class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() { alert(this.name); }
}


const shogun = new Samurai('Dimych');

console.log(shogun.__proto__.__proto__ === Object.prototype);
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__.__proto__ === null);


function f() {
  console.log('Hello!');
}
function f2(a, b) {
  console.log(a + b);
}
{
  const obj = {};
  console.log(obj);

}
f();
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};



Function.prototype.decordefer = function(ms) {
  const f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

f2.decordefer(1000)(1, 2);


{
  const dictionary = Object.create(null, {
    toString: {
      value() {
        return Object.keys(this).join();
      }
    }
  });

  // ваш код, который добавляет метод dictionary.toString
  // добавляем немного данных
  dictionary.apple = 'Apple';
  dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

  // только apple и __proto__ выведены в цикле
  for (const key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
  }

  // ваш метод toString в действии
  console.log(dictionary + ''); // "apple,__proto__"

}
