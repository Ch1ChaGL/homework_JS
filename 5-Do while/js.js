
// const basket = [
// {price: 1500},
// {price: 25},
// {price: 100},
// {price: 10},
// ];

// for (const items of basket){
//    console.log(`Price: ${items.price}`);
// }

// const basket = [
// {name:'laptop',price:1500},
// {name:'pk',price:100},
// {name:'hdmi',price:300},
// {name:'qwert',price:450},
// ];

// for(const { name, price } of basket){                        //{name,price} это диструктурирующий оператор
//     console.log(`Имя: ${name} Цена: ${price}`);
// }


///Цикл For in

// const basket = {
//     laptop :1500,
//     Mouse :150,
//     keybord :300,
//     hdmi:10,
// };

// for(const key in basket){
//     const price = basket[key];
//     console.log(`price of ${key} is ${price}`);
// }

//Использование for of с использованем функции object.keys
const electonics={
    laptop:1100,
    Mouse:25,
    keybord:100,
    hdmi:10,
};

for(const name of Object.keys(electonics)){
    const price = electonics[name];
    console.log(`price of ${name} is ${price}`);
}

let a = 0;

while(a<10){
    console.log(`a: ${a++}`);
    if(a===5)continue;
    console.log("word");
}

const sum=(...args)=>{
    let value =0;
    while(args.length>0){
        value+=args.pop();
    }
    return value;
};


console.log(sum(1,2,3,4,5));

//sleep
const now = (date = new Date() )=> date.getTime();
const sleep = (interval)=>{
    const end =now()+interval;
    console.log(`сейчас: ${now()}`);  
    while(now()<end);
};
sleep(5000);
