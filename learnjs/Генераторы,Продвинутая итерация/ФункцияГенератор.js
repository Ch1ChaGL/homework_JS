'use strict';


function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "функция-генератор" создаёт объект "генератор"

const generator = generateSequence();

const one = generator.next();
const two = generator.next();
const three = generator.next();

console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));


//Перебор генераторов

function* generatorTest1() {
  yield 1;
  yield 2;
  return 3;
}

for (const value of generatorTest1()) {
  console.log(value);
  //1 и 2, потому что на третий вызов будт done: "true" и выход из цикла
}

function* generatorTest2() {
  yield 1;
  yield 2;
  yield 3;
}

for (const value of generatorTest2()) {
  console.log(value);
  //1 2 3
}


//Можно использовать оператор расширения
console.log('ТЕСТ');
//Также как и с перебором через for..of ,
//оператор расширения не возьмет поле return , так как там done: 'true'
const arr = [...generatorTest1(), 0, ...generatorTest2()];

for (const value of arr) {
  console.log(value);
}


const range = {
  from: 1,
  to: 5,
  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    //далее for..of работает только с этим объектом,запрашивая следующие значени
    return {
      current: this.from,
      last: this.to,

      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};


//Cтарая реализация для перебираемого объекта


//Новую можно написать с помощью генератора

const range2 = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    let test;
    for (let i = this.from; i <= this.to; i++) {
      test = i;
      yield i + ' Test';
    }
  }
};

for (const value of range2) {
  console.log(value);
}


function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence2(48, 57);

  // A..Z
  yield* generateSequence2(65, 90);

  // a..z
  yield* generateSequence2(97, 122);

}

let str = '';

for (const code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);

function* gen() {
  const ask1 = yield '2 + 2 = ?';

  console.log(ask1); // 4

  const ask2 = yield '3 * 3 = ?';

  console.log(ask2); // 9
}

const generator3 = gen();

console.log(generator3.next().value); // "2 + 2 = ?"

console.log(generator3.next(4).value); // "3 * 3 = ?"

console.log(generator3.next(9).done); // true
