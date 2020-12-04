const fs = require("fs");

const report = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .filter((a) => a);
console.time("a");

report.forEach((expense) => {
  report.forEach((anotherExpense) => {
    report.forEach((thirdExpense) => {
      if (
        new Set([expense, anotherExpense, thirdExpense]).size ===
        [expense, anotherExpense, thirdExpense].length
      ) {
        const nExpense = Number(expense);
        const nAnotherExpense = Number(anotherExpense);
        const nThirdExpense = Number(thirdExpense);
        if (nExpense + nAnotherExpense + nThirdExpense === 2020) {
          console.log(nExpense * nAnotherExpense * nThirdExpense);
        }
      }
    });
  });
});

console.timeEnd("a");
