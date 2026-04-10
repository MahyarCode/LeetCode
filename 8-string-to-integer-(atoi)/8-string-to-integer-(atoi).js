/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const input = s.trim().replaceAll(" ", "a");
  let str = "";
  let flag = "";
  if (input[0] === "-" || input[0] === "+") {
    flag += input[0];
    str += input.slice(1);
  } else str += input;

  let index = 0;
  let mainNumberString = "";

  while (index <= str.length - 1) {
    if (!isNaN(str[index])) {
      mainNumberString += str[index];
      index++;
    } else break;
  }

  const result = mainNumberString.length > 0 ? `${flag}${mainNumberString}` : 0;

  return +isOutsideSigned32(result);
};

let bigNumberPositive = 2 ** 31 - 1;
let bigNumberNegative = 2 ** 31 * -1;

function isOutsideSigned32(n) {
  if (n < bigNumberNegative) {
    return bigNumberNegative;
  } else if (n > bigNumberPositive) {
    return bigNumberPositive;
  } else return n;
}
