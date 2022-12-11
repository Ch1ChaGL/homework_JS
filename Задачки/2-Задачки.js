
//1
// console.log({ a });
// // eslint-disable-next-line no-var
// const a = 5;
'use strict';

const fn = () => {
  // eslint-disable-next-line no-use-before-define
  console.log(a);
  const a = 5;
};
fn();
