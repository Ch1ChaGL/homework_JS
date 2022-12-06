'use strict';

function inc(a) { //Function decloration
  return a + 1;
}
inc(4);

const sum = function(a, b) {    //Function expresion
  return a + b;
};
sum(3, 4);

const max = (a, b) => (a > b ? a : b);//Лямбда функция/arrow function expresion
max(3, 4);


const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};
console.log(avg(4, 5));


const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Moskov', 'Riga'];
const f = s => s.lenght;
for (const props in cities) {
  f(props);
}
function f1() {

  const cities = ['athens', 'Roma'];
  const f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));
  {
    const f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }
  {
    const cities = ['London', 'Beijing', 'Moskov'];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

f1();
