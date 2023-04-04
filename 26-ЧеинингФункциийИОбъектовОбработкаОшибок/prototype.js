'use strict';


const Text = function(s) {
  this.value = s;
};


Text.prototype.line = function(a) {
  this.value += '\n' + a;
  return this;
};


Text.prototype.toString = function() {
  return this.value;
};


//Usage


const text = new Text('- Добрый день товарищи');

text
  .line('- И тебе не хварать')
  .line('- А что такое?')
  .line('- А ничего');

console.log(text.toString());
