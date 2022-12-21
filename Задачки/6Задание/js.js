'use strict';

//1-5 задание
{
  //Решил что через for не весело, сделал через reduce
  const sum = (...args) => args.reduce((acum, cur) => acum + cur);
  console.log(sum(1, 2, 3, 4));

}
{
  const sum = (...args) => {
    let acum = 0;
    args.forEach(element => acum += +element);
    return acum;
  };

  console.log(sum(1, 2, 3, 4));
}

{
  const sum = (...args) => {
    let i = 0;
    let sum = 0;
    while (args[i] !== args[args.length]) {
      sum += args[i];
      i++;
    }
    return sum;
  };
  console.log(sum(1, 2, 3, 4));
}


{
  Array.prototype.sum = function() {
    return this.reduce((acum, cur) => acum + cur);
  };
  const arr = [1, 2, 3, 4];
  console.log(arr.sum());
}

//6 Задание
{
  const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const maxOfTwoNum = (a, b) => (a > b ? a : b);
  const max = arr => arr.map(row =>
    row.reduce(maxOfTwoNum))
    .reduce(maxOfTwoNum);
  console.log(max(m));
}

//7 Задание
{
  const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };
  const ages = obj => {
    const ages = {};
    for (const i in obj) {
      const name = i;
      ages[name] = obj[i].died - obj[i].born;
    }
    return ages;
  };
  console.dir(ages(persons));
}
