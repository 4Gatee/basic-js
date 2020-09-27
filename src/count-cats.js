const CustomError = require("../extensions/custom-error");

module.exports = function countCats([...cats]) {
  let catCount = 0;
  for (let arr of cats) {
    for (let value of arr) {
      if (value === '^^') catCount++;
    }
  }
  return catCount;
};