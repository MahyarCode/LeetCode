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
    } else continue;

    for (let j = 0; j < input.length; j++) {
      if (!str.includes(input[j])) {
        str + input[j];
      } else {
        result.push(str);
        str = "";
      }
    }
  }

  return result;
};

console.log(lengthOfLongestSubstring("abca"));
