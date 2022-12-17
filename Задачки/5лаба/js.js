'use strict';

let a = +prompt('Введите a',0);
let b = +prompt('Введите b',2);
let e = +prompt('Введите e',0.1);

const f = x => (x - 3*Math.sin(x));


while(b - a >2*e){
    const x1 = (a+b-e)/2;
    const x2 = (a+b+e)/2;
    if(f(x1)<= f(x2)){
        b = x2;
    }
    else{
        a = x1;
    }
}

const Xm = Math.floor((a+b)/2);
const min = Math.floor(f(Xm));

alert(`Xm = ${Xm}, min = ${min}`);