var generateParenthesis = function (n) {
  if (n === 0) return [];

  let stack = [];
  let result = [];

  function backtrack(open, close) {
    if (open === n && close === n) {
      result.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
};

console.log(generateParenthesis(3));
