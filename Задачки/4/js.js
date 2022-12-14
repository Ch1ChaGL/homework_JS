'use strict';

//Задание 1
//немного разобрался как это получилось, но реально сложноватое задание
//Для первого раза использования замыканий
{
  const seq = f => g => (typeof g === 'number' ? f(g) : seq(x => f(g(x))));
  console.log(seq(x => x + 3)(x => x * 2)(4));
}


//Задание 2
{

  const array = () => {
    const arr = [];
    const get = i => arr[i];
    get.gg = x => arr.push(x);
    get.wp = () => arr.pop();
    return get;
  };
  const arr = array();
  arr.gg('first');
  arr.gg('second');
  arr.gg('third');
  console.log(arr(0)); // Выводит: first
  console.log(arr(1)); // Выводит: second
  console.log(arr(2)); // Выводит: third
  console.log(arr.wp()); // Выводит: third
  console.log(arr.wp()); // Выводит: second
  console.log(arr.wp()); // Выводит: first
  console.log(arr.wp()); // Выводит: undefined

}
