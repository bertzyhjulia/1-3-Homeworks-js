// let string6 ='i am in the easycode';
// let newStr = '';
// for (let i = 0; i<string6.length; i++){
    
//     if ( i===0 || string6[i-1] === ' ' ){
    
//     newStr += string6[i].toUpperCase();
//     }
//     else{
//     newStr += string6[i];
//     }

// }
// console.log(newStr);



let srting6_2 = 'tseb eht ma i';
let n = srting6_2.length;
let newString6_2 = '';
for (let i = 0; i<n; i++){
    newString6_2 +=srting6_2[n-1-i]; 
}
console.log(newString6_2);


let factor = 1;
for (let i = 1; i<=10; i++){
    let num = factor*i
    factor = num;

}
console.log(factor);

let string6_4 = 'JavaScript is a pretty good language';
let newStr6_4 = '';
for (let i = 0; i<string6_4.length; i++){
    
        if ( i===0 || string6_4[i-1] === ' ' ){
        
        newStr6_4 += string6_4[i].toUpperCase();
        }
        else if(string6_4[i] == ' '){
            continue;
        }
        else{
        newStr6_4 += string6_4[i];
        }
       
    }
    console.log( newStr6_4);


let mas =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] ;
let newMas = [];
for (let key of mas)
{
    if(key % 2 == 1){
       newMas += key;
       newMas += ' '; 
    }
}
console.log(newMas);

let list = {

    name: 'denis',
    
    work: 'easycode',
    
    age: 29
    
    }

    for (let key in list){
        if (typeof list[key] === 'string'){
            list[key] = list[key].toUpperCase();
            
        }

    }

console.log(list);