const fs = require("fs");

const validators = {
  byr: (key, val) => {
    const valid = Number(val) >= 1920 && Number(val) <= 2002;
    return { key, valid, val };
  },
  iyr: (key, val) => {
    const valid = Number(val) >= 2010 && Number(val) <= 2020;
    return { key, valid, val };
  },
  eyr: (key, val) => {
    const valid = Number(val) >= 2020 && Number(val) <= 2030;
    return { key, valid, val };
  },
  hgt: (key, val) => {
    const match = val.match(/^([0-9]*)(cm|in)$/);
    if (!match) {
      return { key, valid: false, val };
    }
    const [, num, unit] = match;

    const valid =
      (unit === "cm" && Number(num) >= 150 && Number(num) <= 193) ||
      (unit === "in" && Number(num) >= 59 && Number(num) <= 76);
    return { key, valid, val };
  },
  hcl: (key, val) => {
    const valid = /^#[a-f0-9]{6}$/.test(val);
    return { key, valid, val };
  },
  ecl: (key, val) => {
    const choices = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    const valid = choices.includes(val);
    return { key, valid, val };
  },
  pid: (key, val) => {
    const valid = /^[0-9]{9}$/.test(val);
    return { key, valid, val };
  },
};

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n\n")
  .map((passport) =>
    passport
      .replace(/\n/g, " ")
      .split(" ")
      .reduce((accum, entry) => {
        const [attribute, value] = entry.split(":");
        if (attribute !== "cid") {
          accum[attribute] = value;
        }
        return accum;
      }, {})
  )
  .reduce((accum, next) => {
    const valid = Object.keys(next)
      .map((key) => {
        if (key) return validators[key](key, next[key]);
      })
      .filter((a) => a);
    const attrCount = valid.length;
    const validCount = valid.map(({ valid }) => valid).filter((a) => a).length;
    console.log(next);
    if (attrCount === 7 && validCount === 7) {
      // we got em all and they are valid
      accum.push(next);
    } else {
      console.log("found invalid");
      console.log(valid);
    }
    return accum;
  }, []);

console.log(input.length);

module.exports = validators;
