var num=[1,4,5,7,8,10,2];
num=num.filter((prime)=>{
    for(let i=2;i<=Math.sqrt(prime);i++){
        if(prime%i===0){
            return false;

        }
        return true;
    }
});console.log(num);