/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let result = [];

  if (digits.length === 0) return [];

  function backtrack(combination, nextDigit) {
    if (nextDigit.length === 0) {
      result.push(combination);
    } else {
      for (const char of keypad[nextDigit[0]]) {
        backtrack(combination + char, nextDigit.slice(1));
      }
    }
  }

  backtrack("", digits);

  return result;
};

console.log(letterCombinations("23"));
