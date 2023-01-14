'use strict';


/*Функция которая может принимать или отдавать
 функцию называется функцией высшего порядка */


{
  const { sin, PI } = Math;
  const inverse = f => x => 1 / f(x);
  const cosecant = inverse(sin);
  const a = cosecant(5);
}


{
  const fn = (par, callback) => {
    if (!par) {
      callback(new Error('Parameter needed'));
    }
    callback(null, 'Data ' + par);
    return 'Value';
  };
  const res = fn('example', (err, data) => {
    if (err) throw err;
    console.dir({ data });
  });
  console.dir({ res });
}


{
  const fn  = a => {
    const b = 'Closure variable';
    return c => {
      console.dir({ a, b, c });
    };
  };

  const f1 = fn('Parametr 1');
  f1('Parametr 2');


  const f2 = fn('Parametr X');
  f2('Parametr 2');
}

//chain
{
  const fn = a => b => c => a + b + c;
  const res = fn(1)(2)(3);
  console.log('a+b+c = ' + res);
}



//cache
{
  const fn = () => {
    console.log('Generate cache');
    const cache = {};
    return key => {
      let res = cache[key];
      if (res) {
        console.log('From cache');
        return res;
      } else {
        console.log('Calculate and save to cache');
        res = 'Value: ' + key;
        cache[key] = res;
        return res;
      }
    };
  };

  const f1 = fn();
  const f2 = fn();

  f1(1);
  f1(1);
  f2(2);
  f2(2);

}

//wrapper
{
  const logable = fn => (...args) => {
    const res = fn(...args);
    console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`);
    return res;
  };

  const sum = (a, b) => a + b;
  const wrapped = logable(sum);
  console.log(wrapped(2, 3));

}

//callback usage
{
  const add = (a, b) => a + b;
  const sum = (a, b, callback) => callback(a + b);

  console.log('Use add: ' + add(5, 2));

  sum(5, 2, console.log.bind(null, 'Use sum:'));
}

