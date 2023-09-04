'use strict';

class Text {
    constructor(s){
        this.value = s;
    }

    line(a){
        this.value += '\n' + a;
        return this;
    }
    toString(){
        return this.value;
    }
}


const text = new Text('Первая строка')
    .line('вторая строка')
    .line('третья строка');
    
console.log(text.toString());