const fs = require("fs");

const passwords = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .filter((a) => a);

console.log(passwords);

const matcher = /(?<min>\d+)-(?<max>\d+)\s(?<lettter>.):\s(?<pass>.+)/;

let valid = 0;
passwords.forEach((password) => {
  const [_, min, max, letter, pass] = matcher.exec(password);
  const ii = Number(min) + 1;
  const jj = Number(max) + 1;
  const matches = [pass[ii], pass[jj]];
  const count = matches.reduce(function (n, val) {
    return n + (val === letter);
  }, 0);
  if (count === 1) valid++;
});

console.log(valid);
