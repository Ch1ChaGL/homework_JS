'use strict';

/*событие focus вызывается в момент фокусирования
событие blur появляется в момент потери фокуса */

const input = document.querySelector('#input');
const error = document.querySelector('#error');
const btn = document.querySelector('.btn');
// input.addEventListener('blur', event => {
//   if (!input.value.includes('@')) {
//     input.classList.add('invalid');
//     error.innerHTML = 'Пожалуйста, введите правильный email.';
//   }
// });

// input.addEventListener('focus', event => {
//   if (event.target.contains('invalid')) {
//     event.target.remove('invalid');
//     error.innerHTML = '';
//   }
// });

input.addEventListener('blur', event => {
  const inp = event.target;

  if (!inp.value.includes('@')) {
    inp.classList.add('error');

    inp.focus();
  } else {
    inp.classList.remove('error');
  }
});

btn.addEventListener('click', () => {
  alert('click');
});

const form1 = document.querySelector('#form1');

form1.addEventListener(
  'focus',
  () => {
    form1.classList.add('focused');
  },
  true,
);

form1.addEventListener(
  'blur',
  () => {
    form1.classList.remove('focused');
  },
  true,
);

const form2 = document.querySelector('#form2');

form2.addEventListener('focusin', event => {
  form2.classList.add('focused');
  console.log('focusin on form');
});
form2.addEventListener('focusout', event => {
  form2.classList.remove('focused');
  console.log('focusout on form');
});
