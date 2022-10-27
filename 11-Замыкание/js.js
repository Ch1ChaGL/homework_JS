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
const result = add(3)(5);
console.log(result);