'use strict';

//Для получения формы можно использовать именованную колекцию


//document.forms.my  - Форма с именем my (name="my")
//document.forms[0] - первая форма в документе


const form =  document.forms.my;

const elem = form.elements.one; //Получили инпут с (name = "one")

const ageElems = form.elements.age;

// Эти навигационные свойства не зависят от структуры
//тегов внутри формы. Все элементы управления формы,
// как бы глубоко они не находились в форме, доступны в коллекции form.elements.



//<fieldset> как «подформа»
// Форма может содержать один или несколько элементов <fieldset> внутри себя.
// Они также поддерживают свойство elements, в котором
//находятся элементы управления внутри них.


const fieldset = form.elements.userFields;
//alert(fieldset.elements.login === form.elements.login);


/*Сокращённая форма записи: form.name
Есть более короткая запись: мы можем получить доступ
к элементу через form[index/name].

Другими словами, вместо form.elements.login мы можем написать form.login.

Это также работает, но есть небольшая проблема: если мы получаем элемент,
а затем меняем его свойство name, то он всё ещё будет
доступен под старым именем (также, как и под новым).

*/

//alert(form.elements.login === form.login); //Один и тот же инпут
form.login.name = 'username';

//alert(form.elements.login); // undefined
//alert(form.elements.username);


form.login.value = '123';
form.username.value = 'abc';

const login = form.elements.username;
//alert(login.form.name);

//alert(form.username === form.login);


//alert(elem.value);


/*input и textarea
К их значению можно получить доступ через свойство input.value
(строка) или input.checked (булево значение) для чекбоксов. */

ageElems[1].checked = true;


/*Элемент <select> имеет 3 важных свойства:

select.options – коллекция из подэлементов <option>,
select.value – значение выбранного в данный момент <option>,
select.selectedIndex – номер выбранного <option>. */


const select = form.elements.select;

//Делают одно и тоже
select.options[2].selected = true;
select.selectedIndex = 2;
select.value = 'banana';



const select2 = form.elements.select2;
alert(select2);

const option = new Option('test', 123);

select2.append(option);


const selected = Array.from(select2.options)
  .filter(option => option.selected)
  .map(option => option.value);


alert(selected);


//option = new Option(text, value, defaultSelected, selected); --Создание option

