const person ={
    name : 'maxim',
    age:25,
    greet: function(){
        console.log('Greet!');
    }
}
person.greet(); //Можно
//person.sayHellow(); //Нельзя
Console.log(person.toString());//Можно