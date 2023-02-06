'use strict';






function getSrt(...args) {
  return [].slice.call(args, 1).join(args[0]);
}

console.log(getSrt('*', '1', 'b', '1c'));
