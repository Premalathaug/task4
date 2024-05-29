/* Print odd numbers */
(function(num){
    for(var i = 0 ; i< num.length ; i++){
               if(num[i]%2!=0){
                  console.log(num[i])
               } 
          }
    })([32,34,1,5,57,89,33])