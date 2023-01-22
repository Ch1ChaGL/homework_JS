'use strict';


const g1 = {};
const g2 = {};
const g3 = { area: 300 };


// Add property area to g2
g2.area = 200;

// Mixin as a function
const mixinCalculateCost = obj => {
  obj.area = obj.area || 0;
  obj.calculateCost = function(price) {
    return this.area * price;
  };
};


//Mixin to single object
mixinCalculateCost(g1);


//Mixin to array of object
[g1, g2, g3].forEach(mixinCalculateCost);



console.log(g1.calculateCost(5));
console.log(g2.calculateCost(5));
console.log(g3.calculateCost(5));

const t1 = setTimeout(() => {
  console.log('Hello from timer');
}, 2000);

mixinCalculateCost(t1);
t1.area = 10;
console.log(t1.calculateCost(1000));


//2-extend

const extend = (obj, mixin) => {
  const keys = Object.keys(mixin);
  for (const key of keys) {
    obj[key] = mixin[key];
  }
  return obj;
};


const obj1 = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: '121-04-26',
};

const mix1 = {
  toString() {
    return `${this.name} was born in ${this.city} in ${this.born}`;
  },
  age() {
    const year = new Date().getFullYear();
    const born = new Date(this.born).getFullYear();
    return year - born;
  }
};


extend(obj1, mix1);
console.log(obj1.toString());
console.log(obj1.age());


const mix2 = {
  toString() {
    return `${this.name} - ${this.city} - ${this.born}`;
  }
};


const res = Object.assign(obj1, mix1, mix2);

console.log('----------------');
console.log(res.toString()); //Marcus Aurelius - Rome - 121-04-26
console.log(obj1.toString()); //Marcus Aurelius - Rome - 121-04-26


//4-behavior
const scalable = image => {
  image.scale = () => console.log('Image scaled');
};

const lazy = image => {
  const scale = image.scale;
  image.scale = () => setImmediate(() => scale());
};

const image = {};


console.log('Mixin scalable() adds method: scale');
scalable(image);
console.log('Before scale');
image.scale();
console.log('After scale');


console.log('Mixin lazy() adds lazy behavior');
lazy(image);
console.log('Before scale');
image.scale();
console.log('After scale');



const Rect = class {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
};


const equilateral = Category => class extends Category {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
};

const Square = equilateral(Rect);

const p1 = new Square(10, 20, 50);
console.log(p1.toString());


//6-events
const emitable = (obj, events = {}) => Object.assign(obj, {
  on(name, fn) {
    const event  = events[name] || [];
    events[name] = event;
    event.push(fn);
  },
  emit(name, ...data) {
    const event = events[name];
    if (event) {
      for (const fn of event) {
        fn(...data);
      }
    }
  }
});


const movable = obj => {
  obj.on('move', (x, y) => {
    console.log('move', x, y);
    obj.x += x;
    obj.y += y;
    obj.emit('moved');
  });
  return obj;
};

const r1 = movable(emitable(new Rect(10, 20, 50, 150)));

r1.on('moved', () => {
  console.log(r1.toString());
});

r1.emit('move', 10, 20);



{


  const emitable = (obj, events = {}) => Object.assign(obj, {
    on(name, fn) {
      const event = events[name] || [];
      events[name] = event;
      event.push(fn);
    },
    emit(name, ...args) {
      const event = events[name];
      if (event) {
        for (const fn of event) {
          fn(...args);
        }
      }
    }
  });

  const movable = obj => {
    obj.on('move', (x, y) => {
      obj.x += x;
      obj.y += y;
      obj.emit('moved');
    });
    return obj;
  };

  const r1 = movable(emitable(new Rect(20, 30, 40, 40)));
  const r2 = movable(emitable(new Rect(10, 10, 10, 10)));


  r1.on('moved', () => console.log(r1.toString()));
  r2.on('moved', () => console.log(r2.toString()));
  r1.emit('move', 20, 30);
  r2.emit('move', 100, 100);


}
