abstract class Point{
    constructor(
        public x : number,
        public y: number,
    ){}

    print() : void{
        console.log(this.x , this.y);
    }

    abstract sayHi() : void;
}



let fn : (num1: number) => void

fn = (num: number) => console.log();



class newPoint extends Point{
    


    
    constructor(
        public x: number,
        public y : number,
        private name : string,
        
    ){super(x,y)}
    
    sayHi(){
        console.log(this.name);
    }
}


const b = new newPoint(2,3,'23');

b.print();
b.sayHi();


interface map2 {
    id : string,
    age ?: number,
    [propName : string] : any
}

interface Imap {
    name : string,
    age ?: number,
    [propName : string]: any,
}

const map3 : map2[] = [
    {id: '13', age: 18, papa: [13,42,123,'132', ] },
]

const map : Imap  = {
    name : '123',
    age : 34,
    bol : false,
}



interface IUser {
    name : string,
    age: number,
}

interface IPass {
    getPass(): string,
}






class Ch1ChaGl implements IUser, IPass{
    constructor(
        public name: string,
        public age: number,
    ){}

    getPass(){
        return `${this.name}${this.age}`
    }
}





interface IAdmin extends IUser, IPass{
    sayHi():void,
}


class onlyAdmin implements IAdmin {
    constructor(
        public name: string,
        public age: number,
    ){}

    getPass(){
        return `${this.name}${this.age}`
    }
    sayHi(){

    }
}



const admin = new onlyAdmin('Danil', 18);

admin.sayHi();


class Test implements Imap {
    constructor(
        public name: string,
    ){}
}


