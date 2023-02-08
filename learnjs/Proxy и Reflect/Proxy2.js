'use strict';

class User {
  lala = 23;
  #name = 'Гость';
  constructor(fuleName, age, male) {
    this.fuleName = fuleName;
    this.age = age;
    this.male = male;
  }
  getName() {
    return this.#name;
  }
}

let user = new User('Danil', 18, 'М');

user = new Proxy(user, {
  get(target, prop, receiver) {
    const value = Reflect.get(...arguments);
    return typeof value === 'function' ? value.bind(target) : value;
  }
});

console.log(user.getName());


function wrap(target) {
  return new Proxy(target, {
    get(target, property, receiver) {
      const value =  Reflect.get(target, property, receiver);
      if (target[property] === undefined)
        throw new Error('Нет такого свойства');
      else return value;
    }
  });
}



{


  let user2 = {
    name: 'John'
  };



  user2 = wrap(user2);

  console.log(user2.name); // John
  // console.log(user2.age);
}


{
  let array = [1, 2, 3];

  array = new Proxy(array, {
    get(target, property, receiver) {
      if (property < 0) {
        return Reflect.get(target, (target.length -
          Math.abs(property)), receiver);
      }
      return Reflect.get(target, property, receiver);
    }
  });

  console.log(array[-1]); // 3
  console.log(array[-2]); // 2
}
