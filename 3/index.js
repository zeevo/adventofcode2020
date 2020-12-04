const fs = require("fs");

const slope = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .filter((a) => a);

let row = 0;
let col = 0;
let trees = 0;

const rowSize = slope[0].length;

while (row < slope.length) {
  console.log(row, col);

  const level = slope[row];
  const cur = slope[row][col];

  if (cur === "#") {
    trees++;
  }

  row++;
  col = (col + 3) % rowSize;
}

console.log(trees);
// slope.forEach((level) => {
//   [...level].forEach((cell) => {
//     console.log(cell);
//   });
//   row;
//   console.log("\n");
// });
