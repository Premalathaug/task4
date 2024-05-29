let arr1 = [10,65,34,21,87];

let arr2 = [34,87,76,45,3];

let median = function(arr1, arr2) {

let l = arr1.length;

arr1.sort(function(a, b) { return a -b });

arr2.sort(function(a, b) { return a -b });

console.log(arr1, arr2);


if (arr1.length % 2 === 0) {

console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)

console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)

}


else {

console.log((arr1[(l-1) / 2]))

console.log((arr2[(l-1) / 2]))

}

};

median(arr1, arr2);