'use strict';
let TimerId;
const startTime = document.querySelector('.start');
const stopTime = document.querySelector('.stop');

startTime.addEventListener('click', clockStart);
stopTime.addEventListener('click', clockStop);

function setTime() {
  const now = new Date();
  const clock = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    secund: now.getSeconds()
  };
  const clockElement = document.querySelector('.clock');
  const children = clockElement.children;
  for (const child of children) {
    if (clock[child.className] < 10) {
      child.textContent = '0' + clock[child.className];
    } else
      child.textContent = clock[child.className];
  }
}


function clockStart() {
  TimerId = setInterval(setTime, 1000);
  setTime();
}
function clockStop() {
  clearInterval(TimerId);
  TimerId = null;
}

