'use strict';

const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
  hello() {
    console.log('hello');
  }
};

const json = JSON.stringify(student);
console.log(json);


const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
{
  const meetup = JSON.parse(str, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
  });

  console.log(meetup);
}
//1
{
  const user = {
    name: 'Василий Иванович',
    age: 35,
  };
  const json = JSON.stringify(user);
  const user2 = JSON.parse(json);
  console.log(user2);
}

const room = {
  number: 23
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.dir(JSON.stringify(meetup, (key, value) =>
  ((key !== '' && value === meetup) ? undefined : value)));
