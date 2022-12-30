'use strict';


const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask('Вы согласны?', () => alert('Вы согласилсиь'),
  () => alert('Вы отменили выполнение'));


alert('После этого сообщения ждите ошибку');

[1, 2].forEach(alert);
