// const add = (a,b) => a+b;
// const res = add(2,3);
// console.log(res);


// const add = (a,b,callback)=>callback(a+b);

// const res = add(2,3, (res)=>{
// console.log(res);
// });

// const add = (a,b,callback) =>{
//     if(!Number.isFinite(a)|| !Number.isFinite(b)){
//         callback(new Error('Invalid arguments'));
//         return;
//     }
//     callback(null,a+b);
// };
//callback last error first
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


const printA = (callback)=>{
    console.log('A');
    callback();
};
const printB = (callback) => {
    console.log('B');
    callback();
};
const printC = (callback) => {
    console.log('C');
    callback();
}

printA(()=>{
    printB(()=>{
        printA(()=>{
            printC(()=>{
                printB(()=>{
                    console.log("END");
                })
            });
        });
    });
});