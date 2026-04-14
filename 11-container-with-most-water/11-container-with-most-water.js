/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0;
  let end = height.length - 1;
  let start = 0;

  for (let i = 0; i < height.length - 1; i++) {
    const distance = end - start;
    const minValueOfBars = Math.min(height[start], height[end]);
    const area = distance * minValueOfBars;

    if (maxWater < area) maxWater = area;

    if (height[start] > height[end]) {
      end--;
    } else start++;
  }
  return maxWater;
};
