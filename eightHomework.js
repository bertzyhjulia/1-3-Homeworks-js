function sum() {
    const params = Array.prototype.slice.call(arguments);
    
    
    if (!params.length) return 0;
    
    
    return params.reduce ((prev, next) =>  prev + next );
    }
    
    
    sum(1, 2, 3, 4); // 10
    sum(); // 0



   convertToObject = (num)  => 
   ({

       
            value: num,
      
            isOdd: Boolean(num % 2)

      });
      
      
      