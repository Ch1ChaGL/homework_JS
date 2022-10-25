// const add = (a,b) => a+b;
// const res = add(2,3);
// console.log(res);


// const add = (a,b,callback)=>callback(a+b);

// const res = add(2,3, (res)=>{
// console.log(res);
// });

const add = (a,b,callback) =>{
    if(!Number.isFinite(a)|| !Number.isFinite(b)){
        callback(new Error('Invalid arguments'));
        return;
    }
    callback(0,a+b);
};
// callback last error first


/*КОроче спустя полтора часа наверное, я осознал что происходит, вопервых колбэк 
это термин а не какаято общая функция, можно назвать свою колбэк функцию как угодно, и вывести тоже как угодно*/
// function SayHellow () {
// console.log('im callback function');
// };
// const sum = (a,b, HellowCallback)=>{
//     console.log(a+b);
//     HellowCallback();
// }
// sum(2,4,SayHellow);
/*А в самом задание, мы вызываем функцию add в нее передаем два параметра и функцию, потом срабатывает функция add
и мы сравниваем на число, если нет то мы вызываем функцию колбэк с одним значением, а так как при передаче неполных значений 
в функциЮ, такие значения становятся undefind, потому результат и undefind, если же они оба числа, то функция колбэк вызывается
с перым значением 0/null/undefind/false, как флаг, того что ошибки нет, и if в колбэк функции не сработает ,и выведет просто значение,
почему передается стрелочная функция а разбита на несколько частей, трудно сказать,но наверное так надо */

// const res = add(1,3,(error,result)=>{
// if(error) console.error(error);
// console.log({result});
// });



// const stock = [
//     {name: 'Laptop',quantity:15},
//     {name: 'Keyboard',quantity:0},
//     {name: 'Mouse',quantity:10},
// ];

// const inStock = (item)=>item.quantity>0;
// const avialable = stock.filter(inStock);
// console.log(avialable);


// const printA = (callback)=>{
//     console.log('A');
//     callback();
// };
// const printB = (callback) => {
//     console.log('B');
//     callback();
// };
// const printC = (callback) => {
//     console.log('C');
//     callback();
// }

// printA(()=>{
//     printB(()=>{
//         printA(()=>{
//             printC(()=>{
//                 printB(()=>{
//                     console.log("END");
//                 })
//             });
//         });
//     });
// });


const arguments = -1;

if(arguments){
    console.log("hellow");
}