'use strict';


function wrapper(startValue) {
  return () => {
    alert(startValue++);
  };
}

const countRabbits = wrapper(1);


const divBtn = document.querySelector('.but');
const div2Btn = document.querySelector('.btn');


divBtn.onclick = function() {
  alert(this.innerHTML); //Нажми сюда
  //alert('Спасибо');
};



function showDate() {
  alert(new Date().getDate());
}

div2Btn.addEventListener('click', showDate);
div2Btn.addEventListener('click', countRabbits);

//div2Btn.removeEventListener('click', showDate);


/*событие DOMContentLoaded, которое срабатывает,
когда завершена загрузка и построение DOM документа. */
document.onDOMContentLoaded = function() {
  alert('DOM построен'); // не будет работать
};


//Вот так сработатет, потому что некоторые события можно назначить только через
// addEventListener

document.addEventListener('DOMContentLoaded', () => {
  console.log('ДОМ построен');
});

const cords = document.querySelector('#elem');

cords.addEventListener('click', event => {
  alert(event.type + ' на ' + event.currentTarget);
  alert('Координаты: ' + event.clientX + ' : ' + event.clientY);
});


class TestEvent {
  constructor(name) {
    this.name = name;
  }
  handleEvent(event) {
    alert(this.name + ' вызвал событие (класс) =>' + event.type);
  }
}


const obj = {
  name: 'Сh1Cha_Gl',
  handleEvent(event) {
    alert(this.name + ' вызвал событие (объект) =>' + event.type);
  }
};


const withClass = document.querySelector('#class');
const withObj = document.querySelector('#obj');


const instance = new TestEvent('Ch1Cha_Gl');


withClass.addEventListener('click', instance);
withObj.addEventListener('click', obj);
