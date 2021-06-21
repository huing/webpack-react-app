// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/

var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middle = right;
  if (right < 3) {
    return Math.min(...numbers)
  }
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (numbers[left] <= numbers[middle]) {
      // right = middle - 1;
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    // if (numbers[middle] > numbers[middle + 1]) {
    //   // ans = numbers[middle];
    //   // right = middle - 1;
    //   return numbers[middle + 1]
    // }
  }
  return left === numbers.length ? numbers[0] : numbers[right];
};

console.log(minArray([7, 8, 9, 1, 2, 3, 4, 5, 6]));
console.log(minArray([6, 7, 8, 9, 1, 2, 3, 4, 5]));
console.log(minArray([5, 6, 7, 8, 9, 1, 2, 3, 4]));
console.log(minArray([4, 5, 6, 7, 8, 9, 1, 2, 3]));
console.log(minArray([5]));
console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([1, 3, 5]));
console.log(minArray([5, 3, 1]));