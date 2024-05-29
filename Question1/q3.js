

/* sum of all numbers in an array*/
const a = [1,2,3,4,5,];
const num = function() {
let sum = 0;
for (let i = 0; i < a.length; i++) {
sum = sum + a[i];
}

return sum;
}
console.log(num());