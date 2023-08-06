const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8").split("\n\n");

for (let i = 0; i < data.length; i++) {
 let cArr = data[i].split("\n");
 console.log(cArr);
 for (let j = 0; j < cArr.length; j++) {
  cArr[j] = cArr[j].split(" ");
  points(game(cArr[j]));
 }
}

function game(arr) {
 if (arr[0] == arr[1]) {
  return 3;
 }
 // Wins
 //rock - paper
 if (arr[0] == "A" && arr[1] == "Y") {
 }
}
