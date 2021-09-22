

 switch (a){
     case (a === 'block'):
        console.log('block');
        break;
    case (a === 'none'):
        console.log('none');
        break; 
    case (a === 'inline'):
        console.log('inline');
        break;
   default:
        console.log('other');    
 }

 let b = 'hidden';

b = b === 'hidden' ?  'visible':  'hidden';
console.log(b);



let c = 0;

c= c===0 ? 1 : c < 0 ? 'less then zero' : c* 10;
console.log(c);
