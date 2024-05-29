const pal = ['pop','madam'];
const outputArr=[];
const palindrome= (value) => {
const reverse = value.split('').reverse().join(' ');
if(value==reverse) {
outputArr.push(reverse);
}

}

for (let i = 0; i<=pal.length; i++) {
if(pal[i]) {
palindrome(pal[i])

}

}

console.log(outputArr);