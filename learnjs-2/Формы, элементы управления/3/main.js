'use strict';

const select = document.querySelector('#select');

select.addEventListener('change', event => {
  alert(event.target.value);
});

const radio = document.querySelector('.beer__radioInput');

radio.addEventListener('change', event => {
  alert(event.target.value);
});

const input = document.querySelector('#inputEvent');
const result = document.querySelector('#result');

input.addEventListener('input', event => {
  result.innerHTML = event.target.value;
});

/**
 * *События: cut, copy, paste
 * *Эти события происходят при вырезании/копировании/вставке данных.
 * *Они относятся к классу ClipboardEvent и
 * *доступ к копируемым/вставляемым данным.
 */

const cutCopyPaste = document.querySelector('#cutCopyPaste');

cutCopyPaste.addEventListener('copy', event => {
  event.preventDefault();
  alert('Вы пытаетесь скопировать строку');
});

cutCopyPaste.addEventListener(
  'cut',
  event => (event.preventDefault(), alert('Вы пытаетесь сделать вырезку')),
);

cutCopyPaste.addEventListener(
  'paste',
  event => (event.preventDefault(), alert('Вы пытаетесь вставить')),
);

/**
 * todo Задачка Создайте интерфейс,
 * todo позволяющий ввести сумму банковского вклада и процент,
 * todo а затем рассчитать, какая это
 * todo будет сумма через заданный промежуток времени.
 */

/**
 * !Формула let result = Math.round(initial * (1 + interest) ** years);
 */

const form = document.forms.calculator;

const startMoneyInp = form.elements.money;
const durationSelect = form.elements.long;
const procentInp = form.elements.procent;

const calc = () => {
  const initial = +startMoneyInp.value;
  if (!initial) return;
  const interest = procentInp.value * 0.01;
  if (!interest) return;
  const years = durationSelect.value / 12;
  if (!years) return;
  const result = Math.round(initial * (1 + interest) ** years);
  const height = (result / startMoneyInp.value) * 100 + 'px';
  document.querySelector('.diagram__after').style.height = height;
  document.querySelector('.num__after').innerHTML = result;
  document.querySelector('.num__before').innerHTML = startMoneyInp.value;
};

startMoneyInp.oninput = calc;
durationSelect.onchange = calc;
procentInp.oninput = calc;

calc();
