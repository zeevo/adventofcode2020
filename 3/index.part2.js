const fs = require("fs");

const slope = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .filter((a) => a);

const rowSize = slope[0].length;

const trees = (colIncrement, rowIncrement) => {
  let row = 0;
  let col = 0;
  let trees = 0;

  while (row < slope.length) {
    const cur = slope[row][col];

    if (cur === "#") {
      trees++;
    }

    row += rowIncrement;
    col = (col + colIncrement) % rowSize;
  }

  return trees;
};

console.log(
  trees(1, 1) * trees(3, 1) * trees(5, 1) * trees(7, 1) * trees(1, 2)
);
