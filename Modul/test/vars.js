'use strict';

let {hi, bye} = await import('./say.js')

hi();
bye();