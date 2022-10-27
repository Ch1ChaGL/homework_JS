'use strict'

// function add(x){
//     function closure(y){
//         const z =x+y;
//         console.log(`${x}+${y}=${z}`);
//         return z;
//     }
//     return closure;
// }



const add = (x)=> (y)=>{
    const z = x+y;
    console.log(`${x}+${y}=${z}`);
    return z;
}
const result = add(3);
console.log(result(5));


const logger = (kind) =>{
    const colors = {
        warning : '\x1b[1;33m',
        error: '\x1b[0;31m',
        info: '\x1b[1;37m'
    };
    const color = colors[kind] || colors.info;
    return(s)=>{
        const date = new Date().toISOString();
        console.log(color+date+'\t'+s);
    };
};

const warning = logger('warning');
const error = logger('error');
const slow = logger('slow');

slow('I am slow logger');
warning('helloe');
error('World');


const generateKey = (alphabet) =>{
    const max = alphabet.length;
    return (length)=>{
        let key = '';
        for(let i = 0; i<length;i++){
            const index = Math.floor(Math.random() * max);
            key+=alphabet[index];
        }
        return key;
    };
};


const chars = 'abcdefghiklmnopqrstuvwxyz';
const generatePassword = generateKey(chars);

const password = generatePassword(12);
console.log({password});
