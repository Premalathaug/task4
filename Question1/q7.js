
let arr = [1,2,3,55,4,5,3,76,55,77,8,9,8,76,1,1,1,55,76,2];
(function(arr) {

    let n= [...new Set(arr)];
    
    console.log(n);
    
    })(arr)