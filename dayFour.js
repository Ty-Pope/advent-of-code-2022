/* Part One
let range = 0;

const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");
console.log(data);
let numArr = [];
data = data[0].split("\n");
for (let i = 0; i < data.length; i++) {
 numArr.push(data[i].split(","));
 numArr[i][0].replace(/\s/g, "");
 numArr[i][1].replace(/\s/g, "");
 let numOne = numArr[i][0].split("-")[0];
 let numTwo = numArr[i][0].split("-")[1];
 let numThree = numArr[i][1].split("-")[0];
 let numFour = numArr[i][1].split("-")[1];
 numOne = +numOne;
 numTwo = +numTwo;
 numThree = +numThree;
 numFour = +numFour;
 if (numOne <= numThree && numTwo >= numFour) {
  console.log(numArr[i]);
  range++;
 } else if (numOne >= numThree && numTwo <= numFour) {
  console.log(numArr[i]);
  range++;
 }
 console.log(range);
}
console.log(range);
*/

// Part Two
let range = 0;

const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");
console.log(data);
let numArr = [];
data = data[0].split("\n");
for (let i = 0; i < data.length; i++) {
 numArr.push(data[i].split(","));
 numArr[i][0].replace(/\s/g, "");
 numArr[i][1].replace(/\s/g, "");
 let numOne = numArr[i][0].split("-")[0];
 let numTwo = numArr[i][0].split("-")[1];
 let numThree = numArr[i][1].split("-")[0];
 let numFour = numArr[i][1].split("-")[1];
 numOne = +numOne;
 numTwo = +numTwo;
 numThree = +numThree;
 numFour = +numFour;
 //Checks for complete overlap
 if (numOne <= numThree && numTwo >= numFour) {
  console.log(numArr[i]);
  range++;
 } else if (numOne >= numThree && numTwo <= numFour) {
  console.log(numArr[i]);
  range++;
 } else if (numOne == numThree || numTwo == numThree || numOne == numFour || numTwo == numFour) {
  //One digit
  console.log("same");
  range++;
 } else if (numOne < numThree && numTwo < numFour && numTwo > numThree) {
  range++;
 } else if (numOne > numThree && numTwo > numFour && numFour > numOne) {
  range++;
 }
}

console.log(range);
