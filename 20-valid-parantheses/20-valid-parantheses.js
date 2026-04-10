/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

  const parantheses = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      str += s[i];
    } else {
      if (parantheses[str[str.length - 1]] === s[i]) {
        str = str.slice(0, -1);
      } else return false;
    }
  }

  if (str.length > 0) return false;

  return true;
};

console.log(isValid("([)]"));
