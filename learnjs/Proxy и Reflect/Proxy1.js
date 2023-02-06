'use strict';



const target = {};
const proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test);


console.log(proxy.test);

for (const key in proxy) console.log(key);


let numbers = [0, 1, 2, 3];


numbers = new Proxy(numbers, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return 0;
    }
  }
});


console.log(numbers[1]);
console.log(numbers[123]);


let dictinory = {
  'Hello': 'Привет',
  'Bye': 'Пока',
};

dictinory = new Proxy(dictinory, {
  get(target, property) {
    if (property in target) return target[property];
    return property;
  }
});



console.log(dictinory['Hello']);
console.log(dictinory['My name is Danila']);


let OnlyNumbers = [];

OnlyNumbers = new Proxy(OnlyNumbers, {
  set(target, property, value) {
    if (typeof value === 'number') {
      target[property] = value;
      return true;
    }
    return false;
  }
});


OnlyNumbers.push(1);
OnlyNumbers.push(2);
console.log(OnlyNumbers);


//OnlyNumbers.push('OAd'); Error


let user = {
  name: 'Вася',
  age: 30,
  _password: '***'
};


for (const value of Object.keys(user)) {
  console.log(value);
}


user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});


for (const key in  user) {
  console.log(key);   //Исключил _password
}



let user2 = {};

user2 = new Proxy(user2, {
  ownKeys(target) {
    return ['a', 'b', 'c'];
  },
  getOwnPropertyDescriptor(target, property) {
    return {
      enumerable: true,
      configurable: true,
    };
  }
});


console.log(Object.keys(user2));
