
'use strict';
const logger = level => {
  const color = logger.colors[level] || logger.colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

//Функция тоже объект, поэтому мы добавляем туда поле colors с типом объекта
logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m',
};


const warning = logger('warning');
const error = logger('error');
const debug = logger('info');


warning('Привет');

error('Пока');

debug('Как дела');
