'use strict';

const json = '{ "age": 30 }'; // данные неполны
try {

  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Данные неполны: нет имени');
  }

  blabla(); // неожиданная ошибка

  alert(user.name);

} catch (e) {

  if (e.name === 'SyntaxError') {
    console.log('JSON Error: ' + e.message);
  } else {
    throw e; // проброс (*)
  }



}
