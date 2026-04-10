/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];
  const sortedMergedArray = mergedArray.sort((a, b) => a - b);

  console.log(sortedMergedArray);

  const arrLength = sortedMergedArray.length;

  if (arrLength % 2 === 0) {
    const position1 = arrLength / 2 - 1;
    const position2 = arrLength / 2;

    return (sortedMergedArray[position1] + sortedMergedArray[position2]) / 2;
  } else {
    const position = Math.ceil(arrLength / 2 - 1);
    return sortedMergedArray[position];
  }
};
