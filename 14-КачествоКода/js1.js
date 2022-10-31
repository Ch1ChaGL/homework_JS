'use strict';

console.log('Привет!');

function hellow(name) {
  const phrase = `Hellow, ${name}`;
  Say(phrase);
}
function Say(phrase) {
  alert(`**${phrase}**`);
}

//debugger; //Остановка кода с помощью ключевого слова debugger
hellow('Данил');
