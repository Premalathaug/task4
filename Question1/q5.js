let arr = ['pop','noon','madam'];
(function(arr) {
let c = [];
for (let i = 0; i < arr.length; i++) {
    
let farr = arr[i]
let revarr = farr.split('').reverse().join('');
    
if (farr == revarr) {
    
c.push(farr);
    
    }
    
    }
    console.log(c);
     })(arr);