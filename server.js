/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stringNumber = String(x);
  if (stringNumber[0] === "-") {
    stringNumber = stringNumber.slice(1).split("").reverse();
    stringNumber.unshift("-");
    stringNumber = stringNumber.join("");

    return isOutsideSigned32(+stringNumber);
  } else {
    stringNumber = stringNumber.split("").reverse().join("");

    return isOutsideSigned32(+stringNumber);
  }
};

let bigNumber = 2 ** 31 - 1;

function isOutsideSigned32(n) {
  if (n < -bigNumber || n > bigNumber) {
    return 0;
  } else return n;
}

console.log(reverse(-123));
