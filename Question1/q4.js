/* return all the prime numbers in an array */
const Prime=val=>{
    for (let a=2;a<val;a++)
    {
        if(val%a===0)
            return false
    }
    return true;
}
            
     const PrimeNum=function(n){
        let primeNumbers=[];
        for(let value=2;value<=n;value++)
            {
                if(Prime(value))
                    primeNumbers.push(value)

            }
            return primeNumbers
     }       
console.log(PrimeNum(10));
        
        
    