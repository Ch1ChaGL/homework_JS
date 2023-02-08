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



let user2 = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
};

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



let userTest = {
  name: 'Danil',
  _secret: '1234',
};



userTest = new Proxy(userTest, {
  get(target, property) {
    if (property.startsWith('_')) throw new Error('Отказано в доступе');
    else {
      const value = target[property];
      return (typeof value === 'function') ? value.bind(target) : value;
    }
  },
  set(target, property, value) {
    if (property.startsWith('_')) throw new Error('Отказано в доступе');
    target[property] = value;
    return true;
  },
  deleteProperty(target, property) {
    if (property.startsWith('_')) throw new Error('Отказано в доступе');
    delete target[property];
    return true;
  },
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

console.log('-----------------');
// "get" не позволяет прочитать _password
try {
  console.log(userTest._password); // Error: Отказано в доступе
} catch (e) { console.log(e.message); }

console.log('----------------');
// "set" не позволяет записать _password
try {
  userTest._password = 'test'; // Error: Отказано в доступе
} catch (e) { console.log(e.message); }

// "deleteProperty" не позволяет удалить _password
try {
  delete userTest._password; // Error: Отказано в доступе
} catch (e) { console.log(e.message); }

// "ownKeys" исключает _password из списка видимых для итерации свойств
for (const key in userTest) console.log(key); // name


let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, property) {
    return property >= target.start && property <= target.end;
  }
});

console.log(5 in range);
console.log(50 in range);


// function delay(f, ms) {
//   // возвращает обёртку, которая вызывает функцию f через таймаут
//   return function() { // (*)
//     setTimeout(() => f.apply(this, arguments)``, ms);
//   };
// }

// function sayHi(user) {
//   console.log(`Привет, ${user}!`);
// }

// // после обёртки вызовы sayHi будут срабатывать с задержкой в 3 секунды
// sayHi = delay(sayHi, 3000);

// sayHi('Вася');

function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, argsArray) {
      setTimeout(() => target.apply(thisArg, argsArray), ms);
    }
  });
}

function sayHi(user) {
  console.log(`Привет, ${user}!`);
}


sayHi = delay(sayHi, 3000);


sayHi('Данил');
console.log(sayHi.length);



{
  let user = {
    name: 'Danil',
  };

  user = new Proxy(user, {
    get(target, property, receiver) {
      console.log('Get');
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      console.log('Set');
      return Reflect.set(target, property, value, receiver);
    },
  });

  const name = user.name;
  user.name = 'Danil Markov';
}



{


  const user = {
    _name: 'Гость',
    get name() {
      return this._name;
    }
  };
  const ProxyUser = new Proxy(user, {
    get(target, property, receiver) {
      return Reflect.get(target, property, receiver);
    }
  });

  console.log(ProxyUser.name);


  const admin = {
    _name: 'Admin',
    __proto__: ProxyUser,

  };

  console.log(admin.name);
}


{
  const map = new Map();

  const proxy = new Proxy(map, {
    get(target, prop, receiver) {
      const value = Reflect.get(...arguments);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });

  console.log(proxy.set('test', 1));
  console.log(proxy.get('test'));
}



