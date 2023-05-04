'use strict';

const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last)
          return { done: false, value: this.current++ };
        else return { done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num);
}

const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const doublePrice = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrice.meat);

function hello(name) {
  return count => console.log(`Hello ${name} : ${count}`);
}

const count = hello('Danil');

count(3);

function sayHi(pharse, who) {
  console.log(pharse, who);
}

setTimeout(sayHi, 3000, 'Danil', 'Hello');

const user = {
  name: 'Jhon',
};

const descriptor = Object.getOwnPropertyDescriptor(user, 'name');

/**
 * Функция показывает мое имя
 * @param {string} name мое имя
 * @param {number | string} age мой возраст
 * @return {void} в консоль печатается имя
 */
const sayHi2 = (name, age) => {
  console.log(name, age);
};

sayHi2('Danil', 19);

/**
 * Абстрактный класс Animal
 */
class Animal {
  constructor(name, age) {
    if (this.constructor.name === 'Animal') {
      throw new Error(
        `${this.constructor.name}: can't create instance of abstract class`,
      );
    }
  }
}

//const cat = new Animal('Garage', 3); --Ошибка

/**
 * Функция конструктор
 * @param {string} type
 * @param {string} name
 * @param {string | number} age
 */
function Transport(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;

  this.what = () => {
    console.log(type, name, age);
  };
}

Transport.prototype.GetName = function () {
  console.log(this.name);
};

const car = new Transport('car', 'Lada', '10');
car.what();
car.GetName();

const prom = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done!'), 1000);
});

prom
  .then(data => {
    console.log(data);
    return 13;
  })
  .then(num => console.log(num));

/**
 * Промисификация - Функция обертка
 * @param {callback} fn асинхронная функция без аргументов
 * @returns Функция вызова асинхронной функции
 * с выполнением контракта error-first callback
 */
const promisify =
  fn =>
  /**
   * Вызов асинхронной функции
   * @param  {...any} args аргументы асинхронной функции
   * @returns Promise
   */
  (...args) =>
    new Promise((resolve, reject) => {
      args.push((err, value) => {
        if (err) reject(value);
        else resolve(value);
      });
      fn(...args);
    });

async function f() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('готово!'), 1000);
  });

  const result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f().then(() => console.log('Done'));

//Генераторы

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generator = generateSequence();
const one = generator.next();

console.log(one);

const range2 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

for (const iterator of range2) {
  console.log(iterator);
}

const range3 = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      // пауза между значениями, ожидание
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  },
};

(async () => {
  for await (const value of range3) {
    console.log(value);
  }
})();

const numbers = [1, 2, 3, 4];

/**
 * Обертка над объектом, с ловушками traps
 * Которые сработают при взаимодействии с оберткой
 */
const proxy = new Proxy(numbers, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return undefined;
    }
  },
});

console.log(proxy[123]);

let dictionary = {
  Hello: 'Hola',
  Bye: 'Adios',
};

dictionary = new Proxy(dictionary, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else return prop + ' (нет перевода)';
  },
});

console.log(dictionary['Привет']);

/**
 *
 * @param {function} fn
 * @param  {...any} param
 * @returns
 */
const curry = (fn, ...param) => {
  const curried = (...args) =>
    fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args);
  return param.length ? curried(...param) : curried;
};

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(100)(200)(300));

const div = document.body.firstElementChild;

//Деструктурирующее присваивание
for (const { name, value } of div.attributes) {
  console.log(name, value);
}

const input = document.querySelector('input');
input.setAttribute('id', 'hi');
//alert(input.id);

input.id = 'newId';
//alert(input.getAttribute('id'));

input.setAttribute('value', 'text');
//input.setAttribute('value', 'text2');  --Перезапишет
//input.value = 123; -- Не перезапишет

//setTimeout(() => alert(input.getAttribute('value')), 2000);

const Ch1ChaGl = {
  name: 'Danil',
  age: '19',
};

for (const div of document.querySelectorAll('[show-info]')) {
  const field = div.getAttribute('show-info');
  div.innerHTML = Ch1ChaGl[field];
}

const div3 = document.querySelector('[data-about]');
const text10 = div3.dataset.about;
div3.innerHTML = Ch1ChaGl[text10];

const div4 = document.querySelector('[data-widget-name]');
alert(div4.dataset.widgetName);

const listA = document.querySelectorAll('a[href]');

for (const iterator of listA) {
  const attributes = iterator.getAttribute('href');

  if (
    attributes.includes('://') &&
    !attributes.startsWith('http://internal.com')
  ) {
    iterator.style.color = 'orange';
  }
}

const lastElem = document.body.lastElementChild;

const alertElem = document.createElement('div');
alertElem.innerHTML = '<strong>Привет</strong>, как тебя зовут?';
alertElem.classList.add('alert');
//document.body.append(alertElem);

lastElem.insertAdjacentElement('afterend', alertElem);
//lastElem.insertAdjacentElement('afterend', alertElem.cloneNode(true));
lastElem.after(alertElem.cloneNode(true));
//alertElem.classList.remove('alert'); -- Удаление класса

const elem = document.querySelector('#elem');

/**
 * Очищает содержимое HTML элемента
 * @param {HTMLElement} parentElement
 */
function clear(parentElement) {
  if (parentElement === undefined || parentElement === null)
    throw new Error('Element not exists');

  while (parentElement.firstChild) {
    parentElement.firstChild.remove();
  }
}

clear(elem);

const data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTreeDom(obj) {
  // если нет дочерних элементов, то вызов возвращает undefined
  // и элемент <ul> не будет создан
  if (!Object.keys(obj).length) return;

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');
    li.innerHTML = key;

    const childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

/**
 * Возвращает окончательные значения свойства
 */
const computedStyle = getComputedStyle(alertElem);

alert(computedStyle.marginBottom);

let count2 = 1;
/**
 * Применяет стили и вызывает уведомление
 * @param {object} styleObj
 */
const showNotification = ({
  top = 0,
  right = 0,
  html = '',
  className = '',
}) => {
  count2++;
  const notification = document.createElement('div');
  notification.classList.add('notification');

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  notification.textContent = html;
  notification.classList.add(className);

  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
};

setInterval(
  () =>
    showNotification({
      top: 100,
      right: 10,
      html: `Уведомление ${count2}`,
      className: 'welcome',
    }),
  2000,
);
