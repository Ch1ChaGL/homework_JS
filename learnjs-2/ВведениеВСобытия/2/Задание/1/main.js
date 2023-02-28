'use strict';

const container = document.querySelector('#container');

container.addEventListener('click', event => {
  if (event.target.className !== 'remove-button') return;
  const pane = event.target.closest('.pane');
  pane.remove();
});




