'use strict';

const text = (
  s = '',
  o = {
    line: a => ((s += '\n' + a), o),
    toString: () => s,
  },
) => o;

const txt = text('line1').line('line2').line('line3');


console.log(txt.toString());