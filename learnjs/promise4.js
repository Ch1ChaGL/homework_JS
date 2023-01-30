'use strict';



doItAfter(4).then(message => console.log(message, 'heyhey'));


function doItAfter(seconds) {
  const ms = seconds * 1000;


  return new Promise(resolve => {
    setTimeout(resolve('Danil'), ms);
  });
}


