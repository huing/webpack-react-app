// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/

var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middle = 0;
  let ans = -1;
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (numbers[middle] >= numbers[middle - 1]) {
      left = middle + 1;
    }

    if (numbers[middle] < numbers[middle - 1]) {
      ans = numbers[middle];
      right = middle - 1;
    }
  }
  return ans;
};

console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
