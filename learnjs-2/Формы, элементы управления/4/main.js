'use strict';

// const inp1 = document.querySelector('#inp1');
// const btn1 = document.querySelector('#btn1');
// const form1 = document.querySelector('#form1');

// form1.addEventListener('submit', event => {
//   alert('submit!');
//   event.preventDefault();
// });

/**
 * !При отправке формы через input, генерируется событие click
 */

/**
 * !Чтобы отправить форму на сервер
 * !вручную, мы можем вызвать метод form.submit().
 * !При этом событие submit не генерируется.
 * !Предполагается, что если программист вызывает метод
 * !form.submit(), то он уже выполнил всю соответствующую обработку.
 * */

const showCover = () => {
  const coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';
  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
};

const hideCover = () => {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
};

const showPrompt = (text, callback) => {
  showCover();
  const form = document.getElementById('prompt-form');
  const container = document.getElementById('prompt-form-container');

  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = () => {
    const value = form.text.value;
    if (value === '') return false;
    complete(value);
    return false;
  };
  form.cancel.onclick = () => {
    complete(null);
  };
  document.onkeydown = e => {
    if (e.key === 'Escape') {
      complete(null);
    }
  };
  const lastElem = form.elements[form.elements.length - 1];
  const firstElem = form.elements[0];

  lastElem.onkeydown = e => {
    if (e.key === 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };
  firstElem.onkeydown = e => {
    if (e.key === 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.elements.text.focus();
};
document.getElementById('show-button').onclick = () => {
  showPrompt('Введите что-нибудь<br>...умное :)', value => {
    alert('Вы ввели: ' + value);
  });
};
