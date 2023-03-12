'use strict';
// Базовый алгоритм Drag’n’Drop выглядит так:

// При mousedown – готовим элемент к перемещению,
//если необходимо (например, создаём его копию).
// Затем при mousemove передвигаем элемент на
// новые координаты путём смены left/top и position:absolute.
// При mouseup – остановить перенос элемента
//и произвести все действия, связанные с окончанием Drag’n’Drop.


const ball = document.querySelector('.ball');
const container = document.querySelector('.container');
ball.ondragstart = function() {
  return false;
};
ball.onmousedown  =  event => {


  const containerCoords = container.getBoundingClientRect();


  const shiftX = event.clientX - ball.offsetLeft;
  const shiftY = event.clientY - ball.offsetTop;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  //container.append(ball);

  function moveAt(pageX, pageY) {


    const left = pageX - shiftX;
    const top = pageY -  shiftY;

    if (left >= containerCoords.left &&
        left + ball.offsetWidth <=
        containerCoords.left + container.offsetWidth &&
        top >= containerCoords.top &&
        top + ball.offsetHeight <=
        containerCoords.top + container.offsetHeight) {
      ball.style.left = left + 'px';
      ball.style.top = top + 'px';
    } else {
      container.removeEventListener('mousemove', onMoseMove);
      ball.onmouseup = null;
    }
  }
  //moveAt(event.pageX, event.pageY);


  function onMoseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  container.addEventListener('mousemove', onMoseMove);

  ball.onmouseup = () => {
    container.removeEventListener('mousemove', onMoseMove);
    ball.onmouseup = null;
  };

};









const thumb = document.querySelector('.thumb');
const slider = document.querySelector('.slider');
const word = document.querySelector('.word');

word.addEventListener('slider', event => {
  word.style.fontSize = event.detail.fontSize + 'px';
});

thumb.addEventListener('mousedown', event => {
  event.preventDefault();
  const shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    const rightEdge = slider.offsetWidth - thumb.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';

    const k = newLeft / rightEdge;
    const fz = 14 + (k * 10);

    const newEvent = new CustomEvent('slider', {
      detail: {
        fontSize: fz,
      }
    });
    word.dispatchEvent(newEvent);
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});

thumb.ondragstart = function() {
  return false;
};


