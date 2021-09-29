//1
arr =[1,2,3,5,8,9,10];
const Arr = arr.map(n=>({
    digit: n,
    odd: Boolean(n%2),
}));
console.log(Arr);



//2
arr2 = [12, 4, 50, 1, 0, 18, 40] ;
const Arr2 = arr2.some(n=>n===0);
console.log(Arr2);


//3
arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const Arr3 = arr3.every(n=> n.length >= 3);
console.log(Arr3);


//4
arr4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

const Arr4 = arr4.sort((prev, next) => prev.index - next.index);
console.log(Arr4);





//5

arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ] ;
const Arr5 = arr5.sort((prev, next) => prev.length - next.length);  
console.log(Arr5);




//6
arr6 = [

    {cpu: 'intel', info: {cores:2, сache: 3}},
    
    {cpu: 'intel', info: {cores:4, сache: 4}},
    
    {cpu: 'amd', info: {cores:1, сache: 1}},
    
    {cpu: 'intel', info: {cores:3, сache: 2}},
    
    {cpu: 'amd', info: {cores:4, сache: 2}}
    
    ];
    const Arr6 = arr6.sort((prev, next) => prev.info.cores - next.info.cores);
    console.log(Arr6);






//7
let products = [

    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
    
    ];
    


    function filterCollection(products,min,max)  {
        return products
        .filter(({price}) => price >= min && price <= max)
        .sort((prev, next) => prev.price - next.price)
    }
    
    console.log(filterCollection(products, 15, 30));