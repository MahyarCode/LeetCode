/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const result = [];
  let str = "";

  let input = s;

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      input = input.slice(i);
    }

    for (let j = 0; j < input.length; j++) {
      if (!str.includes(input[j])) {
        str += input[j];
      } else {
        result.push(str);
        str = "";
      }
    }
  }
  let longestString = 0;

  result.map((el) => {
    if (el.length >= longestString) {
      longestString = el.length;
    }
  });

  return longestString;
};
