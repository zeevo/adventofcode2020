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
  const rLetter = new RegExp(`${letter}`, "g");
  if (pass.match(rLetter)) {
    const count = pass.match(rLetter).length;
    if (count >= min && !(count > max)) {
      valid++;
    }
  }
});

console.log(valid);
