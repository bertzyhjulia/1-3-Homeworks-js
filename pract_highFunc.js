function firstFunc(arr, fn) {
    let res = '';
    for (let i = 0; i<arr.length; i++){
        res += fn(arr[i]);
    }
   return `New value: ${res} ` ;
}

function handler1(el) {
    let mas='';
    for (let i = 0; i<arguments.length;i++){
        if (String(arguments[i])){
            for (let j = 0; j<String(arguments[i]).length;j++)
            if (j === 0 || String(arguments[i])[j-1] === ','){
                mas += String(arguments[i])[j].toUpperCase();
            }
            else 
            {mas += String(arguments[i])[j];}
        }
        
    }
    let str = '';
    for (let i = 0; i<mas.length; i++){
        if(mas[i]===','){
            continue;
        }
        else{
            str +=mas[i];
        }
    }
    return str;
}

 console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    let mas=[];
    let str ='';
    for (let i = 0; i<arguments.length;i++){
        let val = arguments[i]*10;
        mas.push(val);
    }
    for (let i = 0; i<mas.length;i++){
        str += mas[i].toString();
        str += ',';
    }
    return str;
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
    return `${el.name} is ${el.age}, `;
 }

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    let mas = '';
    for (let i = 0; i<arguments.length; i++){

        mas += arguments[i].split("").reverse().join("");
        mas += ',';   
    }
    return mas;
}

console.log(firstFunc(['abs', '123'], handler4));