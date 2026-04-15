/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  let output = undefined;

  for (let i = 0; i < sorted.length; i++) {
    if (output === target) break;
    let start = i + 1;
    let end = sorted.length - 1;
    while (start < end) {
      const total = sorted[i] + sorted[start] + sorted[end];

      if (output === undefined) output = total;

      if (total > target) {
        if (Math.abs(total - target) < Math.abs(output - target))
          output = total;
        end--;
      } else if (total < target) {
        if (Math.abs(total - target) < Math.abs(output - target))
          output = total;

        start++;
      } else {
        output = total;

        break;
      }
    }
  }

  return output;
};

console.log(threeSumClosest([-2, -1, 1, 4], 0));
