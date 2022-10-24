const goods = ['Laptop', 'Keyboard','Mouse','Mouse'];
const added = new Set(['test1','test2']);
const basket = new Set([...goods,...added]);//Дубликаты во множестве пропадают
console.log(basket);

for(const name of basket){
    console.log(`Element: ${name}`);
}


// basket.add('bag');
// basket.add('Katy')
console.log(basket);
// basket.delete('bag');
// console.log(basket);


const order = new Set(['Laptop','Keyboard','Mouse']);
const stock = new Set(['Bag','Keyboard']);

const basket1 = new Set([
    [...order].filter((item)=>stock.has(item))
]);
const basket2 = new Set([
    [...order].filter((item)=> !stock.has(item))
]);
console.log(basket1);
console.log(basket2);

//Хэш-таблица 
const Electronics = new Map();
Electronics.set('Laptop',1500);
Electronics.set('keyboard', 100);
console.log(Electronics);

for(const [name,price] of Electronics){
    console.log(`Price of ${name} is ${price}`)
}


const price = Electronics.get('Laptop')
console.log({price});


if(Electronics.has('Laptop')){
    console.log('We have a laptop');
}


//Хэш таблицы из объекта


const Electronics2={
   name: {laptop: 1000, mouse: 300},
    keyboard:{inet: 100, kuku:200},
}

for( const item of Object.keys(Electronics2)){
    console.log(Electronics2[item]);
}


const goods1 = new Map(Object.entries(Electronics2));
console.log(goods1);

// Объект из хэш-таблицы
const Electronics3 = Object.fromEntries(goods1);
console.log(Electronics3);


const DNS = new Map();
DNS.set('laptop',1600);
DNS.set('Keyboard',100);
const Mvidio = new Map();
Mvidio.set('Kover',300);
const answer = new Map([...DNS,...Mvidio]);
console.log(answer)



