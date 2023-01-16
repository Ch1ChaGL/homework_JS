'use strict';


/*Помимо значения value, свойства объекта имеют три с
пециальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется
в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить,
а эти атрибуты можно изменять, иначе этого делать нельзя. */

const user = {
  name: 'John'
};


const description = Object.getOwnPropertyDescriptors(user, 'name');

console.dir(description);
console.log(JSON.stringify(description, null, 2));
/*
"name": {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
*/

{
  const user = {};

  Object.defineProperty(user, 'name', {
    value: 'Jhon',
  });

  const description = Object.getOwnPropertyDescriptors(user, 'name');

  console.log(JSON.stringify(description, null, 2));

  /*
 {
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

}

{
  const user = {
    name: 'John'
  };

  Object.defineProperty(user, 'name', {
    writable: false,
  });
  const description = Object.getOwnPropertyDescriptors(user, 'name');
  console.log(JSON.stringify(description, null, 2));

  //user.name = 'Danil'; //Cannot assign to read only property 'name' of object
}


{
  const user = {
    name: 'John',
    toString() {
      return this.name;
    }
  };

  Object.defineProperty(user, 'toString', {
    enumerable: false,
  });

  for (const key in user) {
    console.log(key + ' ' + user[key]); //name John
  }
}


{


  const user = {
    name: 'John'
  };

  Object.defineProperty(user, 'name', {
    configurable: false
  });

  user.name = 'Danil';
  console.log(user.name); //Danil
  //delete user.name; //Ошибка
}


{
  const user = {
    name: 'John'
  };

  Object.defineProperty(user, 'name', {
    writable: false,
    configurable: false
  });

  //   user.name = 'Danil'; //Ошибка
  //   Object.defineProperty(user, 'name', { //Ошибка
  //     value: 'Danil'
  //   });

  //   delete user.name;//Ошибка

//   Object.defineProperty(user, 'name', {
//     configurable: true,                         //Обратно уже никак
//     writable: true
//   });
}



/*Чтобы получить все дескрипторы свойств сразу,
можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).

Вместе с Object.defineProperties этот метод можно
использовать для клонирования объекта вместе с его флагами: */

//let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));

/*Object.preventExtensions(obj)
Запрещает добавлять новые свойства в объект */

/*Object.seal(obj)
Запрещает добавлять/удалять свойства.
Устанавливает configurable: false для всех существующих свойств. */

/*Object.freeze(obj)
Запрещает добавлять/удалять/изменять свойства.
Устанавливает configurable: false, writable: false
для всех существующих свойств*/


/*Object.isExtensible(obj)
Возвращает false, если добавление свойств запрещено, иначе true.*/


/*Object.isSealed(obj)
Возвращает true, если добавление/удаление свойств запрещено
и для всех существующих свойств установлено configurable: false. */


/*Object.isFrozen(obj)
Возвращает true, если добавление/удаление/изменение свойств запрещено,
и для всех текущих свойств установлено configurable: false, writable: false. */


//геттеры и сеттеры
{
  const user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
      return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    }
  };
  console.log(user.fullName);

  user.fullName = 'Alice Cooper';

  console.log(user.fullName);

}


{
  const user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        console.log('Имя слишком короткое, должно быть более 4 символов');
        return;
      }
      this._name = value;
    }
  };

  user.name = 'Pete';
  console.log(user.name); // Pete

  user.name = ''; // Имя слишком короткое...
}
