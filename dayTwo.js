
const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");
let pointsTotal = 0;
let rps = ["A", "B", "C"];
for (let i = 0; i < data.length; i++) {
 let cArr = data[i].split("\n");
 console.log(cArr);
 for (let j = 0; j < cArr.length; j++) {
  cArr[j] = cArr[j].split(" ");
  cArr[j][1] = cArr[j][1].slice(0, 1);
  console.log(cArr[j]);
  game(cArr[j]);
  console.log(pointsTotal);
 }
}
/* 
pointsTotal
Win 6
Tie 3
Loss 0

Rock 1
Paper 2
Scissors 3
*/
/* Part 1
function game(arr) {
 //Tie
 if (arr[0] == "A" && arr[1] == "X") {
  pointsTotal += 3 + shape(arr[1]);
 } else if (arr[0] == "B" && arr[1] == "Y") {
  pointsTotal += 3 + shape(arr[1]);
 } else if (arr[0] == "C" && arr[1] == "Z") {
  pointsTotal += 3 + shape(arr[1]);
 }
 // Wins
 else if (arr[0] == "A" && arr[1] == "Y") {
  //win w/ paper
  pointsTotal += 6 + shape(arr[1]);
 } else if (arr[0] == "B" && arr[1] == "Z") {
  //win w/ scissors
  pointsTotal += 6 + shape(arr[1]);
 } else if (arr[0] == "C" && arr[1] == "X") {
  //win w/ rock
  pointsTotal += 6 + shape(arr[1]);
 } else {
  //losses add 0 pointsTotal so they aren"t needed to be checked
  pointsTotal += shape(arr[1]);
 }
}
function shape(hand) {
 if (hand == "Y") {
  return 2;
 } else if (hand == "X") {
  return 1;
 } else {
  return 3;
 }
}
*/
// Part two

function game(arr) {
 let index;
 for(let i = 0; i < rps.length; i++) {
  if(arr[0] == rps[i]) {
   index = i;
  }
 }
 let answer;
 let indexChange = result(arr);
 if(arr[0] == "A") {
  answer = rps[index + indexChange];
  if(index + indexChange < 0) {
   answer = rps[2]; 
  }
 } else if(arr[0] == "B") {
  answer = rps[index + indexChange];
 } else {
  answer = rps[index + indexChange];
  if(index + indexChange == rps.length) {
   answer = rps[0]; 
  }
 }
 console.log(answer);
 pointsTotal += shape(answer);
}
function result(arr) {
 if(arr[1] == "X") {
  return -1;
 } else if(arr[1] == "Z") {
  pointsTotal += 6;
  return 1;
 } else {
  pointsTotal += 3;
  console.log(pointsTotal);
  return 0;
 }
}
function shape(hand) {
 if (hand == "B") {
  return 2;
 } else if (hand == "A") {
  return 1;
 } else {
  return 3;
 }
}