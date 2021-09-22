let fort = 12 + 14 + '12'

3 + 2 - '1'

'3' + 2 - 1

true + 2

+'10' + 1

undefined + 2

null + 5

true + undefined

console.log(fort);
 


let str =10;

if (str==='hidden'){

str = 'visible';

}



let p = 5;
if (p === 0){
    p = 1;
}
else if (p < 0){
    p='less then zero';
}
else p*=10;
console.log(p);


let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
if (car.age>5){
    console.log('Need Repair');
    car.needRepair = true;
}
else car.needRepair = false;





let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
    if ((item.discount !=  NaN) && (item.price !=  NaN) ){
        item.priceWithDiscount =parseFloat(item.price)- parseFloat(item.price)*parseFloat(item.discount)/100;
        console.log('new price ',item.priceWithDiscount);
    }  else console.log(item.price);






let product = {

    name: 'Яблоко',
    
    price: '10$'
    
    };
    
    
    let min = 10; // минимальная цена
    
    let maxx = 20; // максимальная цена
    if((min <= parseFloat(product.price)) && (maxx >=parseFloat(product.price)))
    {
        console.log(product.name);
    }
    else console.log('not find');
    
    
    