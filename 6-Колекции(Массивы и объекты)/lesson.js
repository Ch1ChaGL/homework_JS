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


const key = Object.keys(purchase);
console.log(key); 

const entries = Object.entries(purchase);
console.log(entries);
console.log(purchase.Electonics[0]);
console.log(purchase.Electonics.at(-1));


const items = [...purchase.Electonics];
console.log(items[1]);
console.log(purchase.Electonics);


console.log([...items,
            ... purchase.Textile,
        ]);

        //Добавление элемена в массив
purchase.Electonics.push({name:'Mouse',price:25});
console.log(purchase.Electonics.at(-1));

const item = purchase.Electonics.pop(); //изъятие ластового элемента
console.log(item);
console.log(purchase.Electonics);


const prices = [10,1500,100,50];
const price = prices.find((item)=>item>100);
console.log({price});


const names =['laptop','keyboard','mouse'];
console.log(names.join('; '));
const index = names.indexOf('mouse');
console.log({index});

const test = purchase.Electonics.filter((item)=>item.price>50);
console.log({test});