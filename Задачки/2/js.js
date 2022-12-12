'use strict';

//Задание 2
{
  const inc = (x = 0) => ++x;
  const a = 5;
  const b = inc(a);
  console.dir({ a, b });
}
//Задание 3
{
  const inc = args => {
    args.n = args.n || 0;
    args.n += 1;
  };
  const obj = {
    n: 5,
  };
  const obj2 = {
    n: 4,
  };
  const obj3 = obj2;
  inc(obj);
  inc(obj);
  inc(obj2);
  console.dir({ obj, obj2 });
  console.log(obj2 === obj3);
}
//Задание4 1Вариант
{
  const arr = [true, 'hellow', 5, 2, -3, 'false',
    true, { n: 3 }, [2, 3, 4], 'true'];
  const hash = {
    number: 0,
    string: 0,
    object: 0,
    boolean: 0,
  };
  const count = (args, hash) => {
    args.forEach(element => {
      console.log('Type: ' + typeof element);
      if (typeof element === 'boolean') {
        hash.boolean += 1;
      }
      if (typeof element === 'number') {
        hash.number += 1;
      }
      if (typeof element === 'string') {
        hash.string += 1;
      }
      if (typeof element === 'object') {
        hash.object += 1;
      }
    });
  };
  count(arr, hash);
  console.dir(hash);
}
//Задание4 2Вариант
{
  const arr = ['true', { a: 2 }, [2, 3, 4],
    true, 34n, 'arr', 5, 6, [2, 3, 4], 2];
  const hash = {};
  const count = (args, hash) => {
    args.forEach(element => {
      const type = typeof element;
      if (!(type in hash)) {
        hash[type] = 0;
        hash[type] += 1;
      } else {
        hash[type] += 1;
      }
    });
  };
  count(arr, hash);
  console.dir(hash);
}
