'use strict';

const div = document.querySelector('.test1');

const btn = document.querySelector('#btn');


function getPositionElement(elem) {
  const obj = elem.getBoundingClientRect();
  alert(`x: ${obj.x} y: ${obj.y}\nwidth:${obj.width} height:${obj.height}\n` +
  `left: ${obj.left} top: ${obj.top}\n` +
  `right: ${obj.right} bottom: ${obj.bottom}`);

}
const f1 = getPositionElement.bind(null, div);
btn.addEventListener('click', f1);



const centerX = document.documentElement.clientWidth / 2;
const centerY = document.documentElement.clientHeight / 2;


const elem = document.elementFromPoint(centerX, centerY);

elem.style.background = 'red';


function createMessageUnder(elem, html) {
  const message = document.createElement('div');

  message.classList.add('mes');

  const coords = elem.getBoundingClientRect();

  message.style.left = coords.left + 'px';
  message.style.top = coords.bottom + 'px';
  message.innerHTML = html;
  return message;
}


const message = createMessageUnder(div, 'Доброе утро');

document.body.append(message);
