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

