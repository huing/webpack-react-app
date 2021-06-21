// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/submissions/

var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middle = right;
  while (left < right) {
    middle = left + Math.floor((right - left) / 2);
    if (numbers[middle] <= numbers[right]) {
      right = middle
    } else {
      left = middle
    }
    if (left + 1 === right) {
      return Math.min(numbers[left], numbers[right])
    }
  }
  return numbers[0];
};
console.log(minArray([1, 3, 3]));
console.log(minArray([1, 3, 3, 1]));
console.log(minArray([3, 3, 1, 3]));
console.log(minArray([7, 8, 9, 1, 2, 3, 4, 5, 6]));
console.log(minArray([6, 7, 8, 9, 1, 2, 3, 4, 5]));
console.log(minArray([5, 6, 7, 8, 9, 1, 2, 3, 4]));
console.log(minArray([4, 5, 6, 7, 8, 9, 1, 2, 3]));
console.log(minArray([5]));
console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([1, 3, 5]));
console.log(minArray([5, 3, 1]));