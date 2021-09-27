//1
let fig ={
    widht: 200,
    height: 100,
    square: function(){
        return this.widht*this.height},
    
};
console.log(fig.square());


//2
const price = {

    price: 10,
    
    discount: '15%',
    
    getPrice: function(){
        return console.log(this.price);
    },
    getPriceWithDiscount: function(){
        let dick = parseFloat(this.discount);
        newPrice = this.price - (this.price * dick/100);
        return console.log(newPrice);
        
    },


};
    
    price.getPrice(); // 10
    
    price.getPriceWithDiscount(); // 8.5





//3
const obj = {
    height: 20,
    inc: function(){
        this.height ++;
    },
};
obj.inc();
console.log(obj.height);



//4
const numerator = {

    value: 1,
    
    double: function () {this.value *=2;
        return  this;
    },
    
    plusOne: function () {this.value +=1;
        return  this;},
    
    minusOne: function () {this.value -=1;
        return  this;},
    
    }
    
    numerator.double().plusOne().plusOne().minusOne();
    
    console.log(numerator.value); // 3

//5
const prog = {
    price: 20,
    num:3,
    prc: function(){
       return this.price * this.num;
    }

}
console.log(prog.prc());

//6
const prog2 = {
    price: 20,
    num:3,

}
prog2.prc =prog.prc;
console.log(prog2.prc());

//7
let sizes = {width: 5, height: 10},

getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));


//8

let element = {

    height: 25,
    
    getHeight: function () {return this.height;}
    
    };
    
    
    let getElementHeight = element.getHeight.bind(element);
    
    // undefined
    
    console.log( getElementHeight());
    