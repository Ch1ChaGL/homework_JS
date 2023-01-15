'use strict';

const { copyFileSync } = require('fs');


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



//callback timer
{

  const fn = () => {
    console.log('Callback form timer');
  };
  const timeout = (interval, fn) => setTimeout(fn, 5000);

  //timeout(5000, fn);
}



//timer-curry

{
  const curry = (fn, ...par) => {
    const curried = (...args) => (
      fn.length > args.length ?
        curry(fn.bind(null, ...args)) :
        fn(...args)
    );
    return par.length ? curried(...par) : curried;
  };


  const fn = () => {
    console.log('Callback from timer');
  };
  const fn2 = () => {
    console.log('Callback from timer2');
  };
  const setTimeoutCallbackLast = (timeout, fn) => setTimeout(fn, timeout);

  const timer = curry(setTimeoutCallbackLast);
  timer(2000)(fn);

  const  timer5s = timer(5000);
  timer5s(fn2);

}



//listener
{
  const iterate = (array, listener) => {
    for (const item of array) {
      listener(item);
    }
  };

  const cities = ['Kiev', 'London', 'Beijing'];

  const print = city => {
    console.log('City: ' + city);
  };

  iterate(cities, print);
}


//listener - time
{
  // const iterate = (array, listener) => {
  //   let counter = 0;
  //SetImmediate or setTimeout(0) or process.nextTick
  //   setInterval(() => {
  //     listener(array[counter++]);
  //if (counter >= array.length) counter = 0;
  //   }, 1000);
  // };

  // const cities = ['kiev', 'London', 'Beijing'];

  // const print = city => console.log('Next city: ' + city);

  // iterate(cities, print);
}


//even
{
  const adder = initial => {
    let value = initial;
    const add = delta => {
      value += delta;
      if (value >= add.maxValue) add.maxEvent(value);
      return add;
    };
    add.max = (max, event) => {
      add.maxValue = max;
      add.maxEvent = event;
      return add;
    };
    return add;
  };


  //Usage

  const maxReached = value => {
    console.log('max value reached, value: ' + value);
  };

  const a1 = adder(10).max(100, maxReached)(-12);

  a1(25)(50)(75)(-1)(-1);

}


//event-emitter

{
  const events = require('events');

  const emitter = new events.EventEmitter();

  emitter.on('new city', city => {
    console.log('Emitted city: ' + city);
  });

  emitter.on('data', array => {
    console.log(array.reduce((a, b) => a + b));
  });

  emitter.emit('new city', 'Delhi');
  emitter.emit('new city', 'Berlin');
  emitter.emit('new city', 'Tokyo');
  emitter.emit('data', [5, 10, 7, -3]);

}


//deferred

{
  const getConference = () => {
    let onDone = null;
    const deferred = {
      data: callback => onDone = callback,
    };
    setTimeout(() => {
      if (onDone) onDone(['Tehran', 'Yalta', 'Potsdam']);
    }, 5000);
    return deferred;
  };


  //usage
  const conference = getConference();
  console.log(conference);

  conference.data(list => { console.log(list); });
  console.log('end');
}


//errors
{



}
