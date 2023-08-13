/* Part one
//get input \/\/
//length \/\/
//slice \/\/
//check \/\/
//convert to num \/\/
//sum \/\/
const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");

let dataArr = data[0].split("\n");
let letterArr = [];
for (let i = 0; i < dataArr.length; i++) {
 dataArr[i] = dataArr[i].replace(/\s/g, "");
 let length = dataArr[i].length;
 let cOne = dataArr[i].slice(0, length / 2);
 let cTwo = dataArr[i].slice(length / 2, length);
 let arrOne = [];
 let arrTwo = [];
 for (let j = 0; j < cOne.length; j++) {
  arrOne.push(cOne[j]);
  arrTwo.push(cTwo[j]);
 }
 let match = false;
 for (let k = 0; k < arrOne.length; k++) {
  for (let o = 0; o < arrTwo.length; o++) {
   if (arrOne[o] == arrTwo[k]) {
    letterArr.push(arrOne[o]);
    match = true;
    break;
   }
  }
  if (match) {
   console.log(letterArr);
   break;
  }
 }
}
let scores = [];
let grandSum = 0;
console.log(letterArr);
for (let i = 0; i < letterArr.length; i++) {
 scores.push(letterArr[i].toLowerCase().charCodeAt(0) - 97 + 1);
 if (letterArr[i].toUpperCase() === letterArr[i]) {
  scores[i] += 26;
 }
 grandSum += scores[i];
}
console.log(grandSum);

*/
const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");

let dataArr = data[0].split("\n");
for (let i = 0; i < dataArr.length; i++) {
 dataArr[i] = dataArr[i].replace(/\s/g, "");
}
console.log(dataArr.length / 3);
let groupArr = [];
for (let i = 0; i < dataArr.length; i++) {
 let newArr = [];
 newArr.push(dataArr[i], dataArr[i + 1], dataArr[i + 2]);
 i += 2;
 groupArr.push(newArr);
}
let letterArr = [];
for (let i = 0; i < groupArr.length; i++) {
 let found = false;
 for (let j = 0; j < groupArr[i][0].length; j++) {
  for (let k = 0; k < groupArr[i][1].length; k++) {
   if (groupArr[i][0][j] === groupArr[i][1][k]) {
    for (let p = 0; p < groupArr[i][2].length; p++) {
     if (groupArr[i][2][p] === groupArr[i][0][j]) {
      console.log("hi");
      console.log(letterArr);
      letterArr.push(groupArr[i][0][j]);
      found = true;
      break;
     }
    }
    if (found) {
     break;
    }
   }
  }
  if (found) {
   break;
  }
 }
}
let grandSum = 0;
let scores = [];
console.log(letterArr);
for (let i = 0; i < letterArr.length; i++) {
 scores.push(letterArr[i].toLowerCase().charCodeAt(0) - 97 + 1);
 if (letterArr[i].toUpperCase() === letterArr[i]) {
  scores[i] += 26;
 }
 console.log(scores[i]);
 grandSum += scores[i];
}
console.log(grandSum);
