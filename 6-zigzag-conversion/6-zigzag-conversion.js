/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const arr = Array.from({ length: numRows }, () => []);

  let flag = 1;
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (index === 0) {
      flag = 1;
      arr[index].push(s[i]);
      index += flag;
    } else if (index < arr.length - 1) {
      arr[index].push(s[i]);
      index += flag;
    } else if ((index = arr.length - 1)) {
      flag = -1;
      arr[index].push(s[i]);
      index += flag;
    }
  }

  const result = arr.map((array) => array.join(""));
  const finalResult = result.join("");

  return finalResult;
};
