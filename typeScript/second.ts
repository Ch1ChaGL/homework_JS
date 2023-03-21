//generic
{
    const getter = (data:any) : any => data;
    
    
    getter(10); //10
    getter('test'); //'test'
    }
    
    
    
    //const getter = <T>(data: T) : T => data;
    
    
    function getter<T> (data: T):T {
        return data;
    }
    
    

    //list - это как бы параметры readonly которые передадутся в виде значений, тоесть будут в виде числа

    function getter2<T> (num1 : T, num2: T , num3 : T):T {
        return num1;
    }
    
    
    const list  = [2,3,4] as const;
    getter2(...list);



    //Можно также изменить сигнатуру функции
    function getter3<T> (...args : Array<T>) : T{
        return args[0]; 
    }

    const list2 = [2,3,4];
    getter3(...list2); //2


    //Стандартное объявление с generic type
    function getter4<T> (data: T):T {
        return data;
    }
    
    
    
    getter<number>(10); //Тут значит , что входной параметр обязательно должен быть number
    getter<string>('10').length; //Тут значит , что входной параметр обязательно должен быть string
    

    
    // class User {
//     constructor(
//         public name : string,
//         public age : number,
//     ){}

//     getPass() : string{
//         return `${this.name}${this.age}`;
//     }
// }


class User<T>{

    constructor(
        public name : T,
        public age : T,
    ){}

    getPass() : string {
        return `${this.name}${this.age}`;
    }
}


const danil = new User('Yauhen', '31');

const max = new User(123,321);

danil.getPass();
max.getPass();


class User2<T, K>{
    constructor(
        public name:T,
        public age : K,
    ){}
    getPass() : string{
        return `${this.name}${this.age}`;
    }
}


const danil2 = new User2('test', 'test');
const danil3 = new User2('test', 4);
const danil4 = new User2(4, 5);



class User3<T, K extends number> {
    constructor(
        public name : T,
        public age : K,
    ){}

    public getPass() : string{
        return `${this.name}${this.age}`;
    }

    public getSecret(): number {
        return this.age ** 2;
    }
}

const test = new User3(3, 3);
const test2 = new User3('3', 3);
