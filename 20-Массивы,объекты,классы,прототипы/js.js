'use strict';

//Объекты

const person1 = {};
person1.name = 'Mаrkus';
const person2 = new Object();
person2.name = 'Markus';

const person3 = {
  name: 'Markus',
};
console.dir({ person1, person2, person3 });


const person4 = {
  name: 'Marcus',
  get city() {
    return 'Roma';
  },
  set city(value) {
    console.log('Markus remains in Rome');
  }
};
const a = person4.city;
console.log(a, { person4 });
person4.city = 'Moscow';



if ('name' in person4) {
  console.log('person name is:' + person4.name);
}

for (const key in person4) {
  const value = person4[key];
  console.dir({ key, value });
}

//Массивы
const letters = [];

letters.push('B');
console.dir({ letters });
letters.unshift('A'); //Добавление в начало\
letters.push('C');
console.dir({ letters });


//Сериализация - преобразования массива или объекта в строку

const person5 = {
  name: 'Marcus',
  city: 'Roma',
  born: 121,
};

const s = JSON.stringify(person5); //Преобразование объекта в строку
const ss = JSON.stringify(letters);//Преобразование массива в строку
console.log(letters + '');//Преобразование массива в строку c потерей точности
console.log(letters.join('---'));
console.log(ss);
console.log(s);
console.log(person5 === s, letters === ss); //false,false
const obj = JSON.parse(s); //Преобразование строки в объект
const arr = JSON.parse(ss); //Преобразование строки в массив
console.dir(obj);
console.dir(arr);




{
  const numbers = [7, 10, 1, 5, 2];
  numbers.forEach((item, i, arr) => {
    console.log(i, arr, item);
  });
  numbers.field2 = 'Values2';
  numbers[-10] = 'value3';
  numbers.field1 = 'value3';
  numbers[5] = 20;


  for (const i in numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
  }

  for (const i of numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
  }
}

{
  const f1 = x => x * 2;
  const f2 = x => ++x;

  const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);

  const f3 = compose(f1, f2);
  const res1 = [7, 10, 1, 5, 2]
    .filter(x => x > 4)
    .map(f3)
    .reduce((acc, val) => acc + val);
  console.log(res1);
}


{
  const matrix = [
    [7, 10, 1, 5, 2],
    [6, -1, 7, 2, 3],
    [1, 2, 4, -8, 2],
    [-6, 4, 8, 2, 0],
  ];
  const max = (a, b) => ((a > b) ? a : b);
  const res = matrix.map(row => row.reduce(max))
    .reduce((acc, rowMax) => acc + rowMax);

  console.log(res);

  for (const i of matrix) {
    const row = i;
    for (const j of row) {
      const col = j;
      console.log(col);
    }
  }

  for (const i in matrix) {
    const row = matrix[i];
    for (const j in row) {
      const col = row[j];
      console.log(col);
    }
  }
  matrix.forEach((element, i) => element
    .forEach((element, j) => console.log(i, j, element)));
  let count = 0;
  const arr = [7, 10, 1, 5, 2];
  /*В лямбда выражениях возвращается,
  только то что происходит после последней запятой,
  все остальное либо исполняется, либо отбрасывается */
  const sum  = (acc, val) => (count++, acc + val);
  const res1  = arr.reduce(sum);
  console.log({ res1, count });
}



{
  const p1 = {
    x: 10,
    y: 20,
    move(x, y) {
      this.x += x;
      this.y += y;
    },
    toString() {
      return `[${this.x},${this.y}]`;
    }
  };
  p1.move(10, 10);
  console.log(p1.toString());
  console.log(p1 + ''); //Вызовется метод toString();
}
function Point(x, y) { //Прототип, функция-конструктор
  this.x = x;
  this.y = y;
}
Object.prototype.hi = function() {
  console.log('hi');
};

{
  const p4 = {
    x: 10,
    y: 20,
  };
  const p1 = new Point(20, 20);
  const p2 = new Point(30, 20);
  console.log(p1);
  console.log(p2);


  //Метод для Point
  /*Принимает объект, диструктурирующим присвоением забирает x и y
  Затем создает новый объект с полями */
  Point.from = function(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  };


  /*Для каждого объекта прототипа Point, будет содержаться метод move */
  Point.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
  };


  Point.prototype.toString = function() {
    return `[${this.x},${this.y}]`;
  };



  const p3 = Point.from(p4);
  p3.move(10, 20);
  console.log(p3);

  console.log('Function prototype:', (function() {}.prototype));
  console.log('lambda prototype:', (() => {}).prototype);

  console.log('Point prototype:', Point.prototype);
  console.log('move prototype:', Point.prototype.move.prototype);
}
Point.prototype.move.prototype.privet = function() {
  console.log('Privet');
};


//Прототипы
{
  const person = new Object({
    name: 'Maxim',
    age: 25,
    greet() {
      console.log('Greet');
    }
  });
  console.dir(person);
  Object.prototype.sayHello = function() {
    console.log('Hello');
  };
  const lena = Object.create(person);
  person.sayHello();
  const str = 'I am string';
  str.sayHello();
  lena.name = 'Elena';
  console.log({ 'Lena name': lena.name,
    'Lena proto name': lena.__proto__.name });

}

