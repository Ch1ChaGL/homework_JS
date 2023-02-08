'use strict';


function makeObservable(target) {
  target.handlers = new Map();

  target.observe = function(key, f) {
    this.handlers.set(key, f);
  };
  return new Proxy(target, {
    set(target, property, value, receiver) {
      const nameCathHandler = this.set.name;
      let valueReflect;
      if (target.handlers.has(nameCathHandler)) {
        valueReflect = Reflect.set(target, property, value, receiver);
        const observe = target.handlers.get(nameCathHandler);
        observe(property, value);
        return valueReflect;
      } else return valueReflect;
    }
  });
}

let user = { name: 'Danil' };
user = makeObservable(user);

user.observe('set', (key, value) => {
  console.log(`SET ${key}=${value}`);
});
user.observe('get', (key, value) => {
  console.log(`SET ${key}=${value}`);
});


user.name = 'John'; // выводит: SET name=John

