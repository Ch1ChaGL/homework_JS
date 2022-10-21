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