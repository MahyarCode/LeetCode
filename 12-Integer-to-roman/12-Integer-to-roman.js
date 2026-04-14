/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let output = "";

  const romanValues = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  for (let i = 1000; i >= 1; i /= 10) {
    while (num >= i) {
      if (Math.floor(num / i) === 9) {
        output += romanValues[9 * i];
        num -= 9 * i;
      } else if (Math.floor(num / i) >= 5) {
        output += romanValues[5 * i];
        num -= 5 * i;
      } else if (Math.floor(num / i) === 4) {
        output += romanValues[4 * i];
        num -= 4 * i;
      } else if (Math.floor(num / i) < 5) {
        output += romanValues[i];
        num -= i;
      }
    }
  }

  return output;
};
