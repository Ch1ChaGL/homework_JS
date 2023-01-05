'use strict';

const now = new Date(0);
console.log(now);


const date = new Date('2110-01-05');
console.log(date);





//1

{
  const date = new Date(2012, 1, 20, 3, 12);
  console.log('1 = ' + date);
}

//2
//Решил еще потренировать прошлые темы,
//но конечно использовать сразу массив было бы быстрее и правильнее
function getWeekDay(date) {
  const days = new Set(['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']);
  const day = date.getDay();
  return Array.from(days)[day];
}
{
  const now = new Date();
  console.log('2 = ' + getWeekDay(now));

}


function getLocalDay(date) {
  const day = date.getDay();
  return day === 0  ? 7 : day;
}
//3
{
  const now = new Date('2023-01-08');
  console.log('3 = ' + getLocalDay(now));
}

//4

const getDateAgo = (date, count) => {
  const dateInPast = new Date(date);
  dateInPast.setDate(date.getDay() - count);
  return dateInPast;
};
{
  const date = new Date();
  console.log(getDateAgo(date, 100000));
}

//5

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
};
{
  console.log(getLastDayOfMonth(2012, 0));
}

//6

const getSecondsToday  = () => {
  const now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
};
console.log(getSecondsToday());

//7
function getSecondsToTomorrow() {
  const now = new Date();
  return 86400 - (now.getHours() * 3600 +
  now.getMinutes() * 60 + now.getSeconds());
}

console.log(getSecondsToTomorrow());


//8

function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return 'Был в сети только что...';
  }
  diff = new Date() - date;
  const sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + 'cек назад';
  }
  diff = new Date() - date;
  const min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }
  diff = new Date() - date;
  const past = new Date(new Date() - diff);
  const day = past.getDate();
  const month = past.getMonth() + 1;
  const year = past.getFullYear();
  return `${day}.${month}.${year}`;
}

{
  console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

  console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

  console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
  // "5 мин. назад"

  // вчерашняя дата вроде 31.12.2016, 20:00
  console.log(formatDate(new Date(new Date() - 86400 * 1000)));
}
