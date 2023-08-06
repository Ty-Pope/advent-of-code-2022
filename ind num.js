const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf8')
 .split("\n\n");

let maxSum = 0;
let sum = 0;
for(let i = 0; i < data.length; i++) {
 let numArr = data[i].split("\n");
 for(let j = 0; j < numArr.length; j++) {
  sum += parseInt(numArr[j]);
 }
 if (sum > maxSum) {
  maxSum = sum;
 }
 sum = 0;
}
console.log(maxSum);