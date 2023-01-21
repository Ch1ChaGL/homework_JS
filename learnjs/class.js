'use strict';
{
  class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log(this.name);
    }
  }


  const user = new User('Данил');

  user.sayHi();

}

{
  const User = class MyClass {
    sayHi() {
      console.log('Привет тест2', MyClass);
    }
  };
  new User().sayHi();
}


function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}


{
  const User = makeClass('Данил3');
  new User().sayHi();
}

{
  class User {

    constructor(name) {
      // вызывает сеттер
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('Имя слишком короткое.');
        return;
      }
      this._name = value;
    }

  }
  const user = new User('Иван');
  console.log(user.name);

  for (const key in user) {
    console.log(user[key], key);
  }
}


// function Clock({ template }) {

//   let timer;

//   function render() {
//     const date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     const output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// const clock = new Clock({ template: 'h:m:s' });
// clock.start();


{

  class Clock {
    constructor({ template }) {
      this.template = template;
    }
    render() {
      const date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      const output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.render();
      this.timer = setInterval(() => (this.render()), 1000);
    }
  }
  const clock = new Clock({ template: 'h:m:s' });
  clock.start();
  clock.stop();
}

//Наследование
{
  class Animal {
    constructor(name) {
      this.name = name;
      this.speed = 0;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name}, Бежит со скоростью ${this.speed}`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name}, Не бежит`);
    }
  }


  const animal = new Animal('Мой питомец');

  animal.run(500);
  animal.stop();


  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name}, прячется`);
    }
  }

  const rabbit = new Rabbit('Кролик');
  rabbit.hide();
  rabbit.run(501);
  rabbit.stop();
  console.log(Object.getPrototypeOf(Rabbit.prototype));
  console.log(Rabbit.prototype.__proto__ === Animal.prototype); //true
}


//Переопределение

{
  class Animal {
    constructor(name) {
      this.name = name;
      this.speed = 0;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name}, Бежит со скоростью ${this.speed}`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name}, Не бежит`);
    }
  }


  const animal = new Animal('Мой питомец');

  animal.run(500);
  animal.stop();


  class Rabbit extends Animal {
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
    hide() {
      console.log(`${this.name}, прячется`);
    }
    stop() {
      super.stop();
      this.hide();
    }
    print() {
      for (const key in this) {
        console.log(key + ' : ' + this[key]);
      }
    }
  }
  const rabbit = new Rabbit('Беллый кролик', 10);

  rabbit.run(100);
  rabbit.print();
  rabbit.stop();
}

{
  const a = {
    'name': 'Test'
  };
}

//Статические методы

class Article {

  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}


const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1))
];


articles.sort(Article.compare);
console.log(articles[0].title);


//Создание статического метода, для фабричного метода
{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createToday() {
      return new this('Сегодняшняя газета', new Date());
    }

  }


  const article = Article.createToday();
  console.log(article.date, article.title);
}



//Наследование статических методов

{
  class Animal {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
    }

    run(speed = 0) {
      this.speed += speed;
      console.log('Бежит со скоростью ' + speed);
    }

    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  }


  class Rabbit extends Animal {
    constructor(name, speed, color) {
      super(name, speed);
      this.color = color;
    }

    run(speed = 0) {
      super.run(speed);
      console.log('Но это кролик');
    }

    hide() {
      this.speed = 0;
      console.log(`${this.color} кролик прячется в норе`);
    }
  }

  const rabbits = [
    new Rabbit('Белый кролик', 10, 'White'),
    new Rabbit('Чёрный кролик', 5, 'Black')
  ];

  rabbits.sort(Rabbit.compare);

  rabbits[0].hide();

}


{
/*Так что Rabbit extends Animal создаёт две ссылки на прототип:

Функция Rabbit прототипно наследует от функции Animal.
Rabbit.prototype прототипно наследует от Animal.prototype */
  class Animal {}
  class Rabbit extends Animal {}

  console.log(Rabbit.__proto__ === Animal); //true
  console.log(Rabbit.prototype.__proto__ === Animal.prototype); //true
}


{
  class Rabbit extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
  }

  const rabbit = new Rabbit('Кроль');

  console.log(rabbit.hasOwnProperty('name'));


  /*Все равно есть отличия, если мы унаследовались от Object, то
мы можем вызывать его статические методы */
  const wages = {
    Danil: 3000,
    Artem: 3500,
    Ivan: 4000,
  };

  for (const [name, salary] of Rabbit.entries(wages)) { //Работает
    console.log(name, salary);
  }
}



//Приватные и защищенные методы и свойства
{
// class CoffeeMachine {
//   // количество воды внутри
//   waterAmount = 0;
//   constructor(power) {
//     this.power = power;

  //     console.log(`Создана кофеварка, мощность: ${power}`);
  //   }

  // }
  // const coffeeMachine1 = new CoffeeMachine(100);

// // добавляем воды
// coffeeMachine.waterAmount = 200;
}


{
  class CoffeeMachine {

    //Защита данных _waterAmont путем общей договоренности
    //и использования геттера и сеттера
    set waterAmount(value) {
      if (value < 0) throw new Error('Отрицательное количество воды');
      this._waterAmount = value;
    }


    get waterAmount() {
      return this._waterAmount;
    }

    constructor(power) {
      this._power = power;
    }

    //Свойство только для чтения
    get power() {
      return this._power;
    }
  }

  const coffeeMachine2 = new CoffeeMachine(150);

  console.log(coffeeMachine2.power);
  //coffeeMachine2.waterAmount = -10; //Ошибка
}


//но лучшее использовать функции get.../ ...set
{

  class CoffeeMachine {
    setWaterAmount(value) {
      if (value < 0) throw new Error('Отрицательное количество воды');
      this._waterAmount = value;
      return this;
    }

    getWaterAmount() {
      return this._waterAmount;
    }
  }

  const a = new CoffeeMachine().setWaterAmount(100).getWaterAmount();
  console.log(a);


  //Защищенные поля наследуются

  class MegaMachine extends CoffeeMachine {}

  const b = new MegaMachine();
  console.log(b.setWaterAmount(100000).getWaterAmount());
}



//Новые возможности.
//Приватные свойства
{

  class CoffeeMachine {
    #waterLimit = 200;
    #waterNow;
    constructor(value){
      this.#waterNow = this.#checkWater(value);
    }
    waterNow(){
      return this.#waterNow;
    }
    #checkWater(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      if (value > this.#waterLimit) throw new Error("Слишком много воды");
      return value;
    }
  }
  
  //const coffeeMachine1 = new CoffeeMachine(-100); //Отрицательный уровень воды
  //const coffeeMachine2 = new CoffeeMachine(300);//Слишком много воды
  const coffeeMachine3 = new CoffeeMachine(150);//Все нормально
  console.log(coffeeMachine3.waterNow());
  //coffeeMachine.#checkWater();  //Ошибка
  //coffeeMachine.#waterLimit = 10000; //Ошибка

  class MegaMachine extends CoffeeMachine{
    getWaterNow(){
        //return this.#waterNow; - так нельзя
        return this.waterNow(); //Зато можно так
    }
  }

  const test = new MegaMachine(99);
  console.log(test.getWaterNow()); //99
}

/*Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка.
Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него. */

/*Приватные поля имеют префикс #. JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса. */