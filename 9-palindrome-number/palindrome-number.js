/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    const number = String(x);
    const reversedNumber = number.split('').reverse().join('');

    if (number === reversedNumber) {
        return true;
    } else return false;
};