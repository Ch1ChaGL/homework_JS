'use strict'
const basket = {
    Laptop:1500,
    Keyboaed:100,
    HDMI:10,
};


basket['Mouse']=25;
console.log(basket);

const key = 'Test';
basket[key]=50;
console.log(basket);


delete basket.Keyboaed;
console.log(basket);


const goods = {
    Test1:15,
    Test2:30,
    Test3:40,
}

const order = {...basket,...goods}; //слияние объектов
console.log(order);

//Можно  собрать из частей
/*{...basket,test:50,test2:30}
{test:50,test2:30,...basket} */

// Примесь (mixin) 
const calculateTotal = (obj) =>{
    let total = 0;
    for(const key of Object.keys(obj)){
        total+= obj[key];
    }
    return total;
}
//Плохой вариант примеси 
const mixTotal = (obj) => {
    obj.total = calculateTotal(obj);
}

// mixTotal(basket);
// console.log(basket);



//Так будет лучше
const addTotal = (obj)=>{
    return{...obj,total: calculateTotal(obj)};
};

const order1 = addTotal(basket);
console.log(order1);
console.log(basket);

// Еще лучше разделить поля 

const goodsTotal = (goods) =>{
    return {goods,total:calculateTotal(goods)};
}
const order3 = goodsTotal(basket);
console.log(order3);
console.log(order3.goods);


const purchase = {
    Electonics:[
        {name: 'Laptop',price:1500},
        {name: 'Keyboard',price:100},
        {name: 'HDMI cable',price:10},
    ],
    Textile:[
        {name: 'Bag', price:50},
    ],
};


console.log({purchase});

console.dir(purchase, { depth: null });

console.log(JSON.stringify(purchase));