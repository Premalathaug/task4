let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k =5 ;

let rot = function(arr) {

for (let i = 0; i < k; i++) {

arr.unshift(arr.pop());

}

console.log(arr);

}

rot(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];