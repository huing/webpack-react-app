// const arrFun = (array) => {
//   let index = 0;
//   let currentIndex = 0;
//   let optioner = "+";
//   for (index; index < array.length; index += 1) {
//     const element = array[index];
//     if (optioner === "+" && element >= array[index + 1]) {
//       if (element >= array[currentIndex]) {
//         currentIndex = index;
//       }
//       optioner = "-";
//     }
//     if (optioner === "-" && element <= array[index + 1]) {
//       optioner = "+";
//     }
//   }
//   console.log(currentIndex);
// };

const arrFun = (array) => {
  let index = 0;
  let currentIndex = 0;
  for (index; index < array.length - 1; index += 1) {
    if (array[index] > array[index + 1] && array[index] >= array[currentIndex]) {
      currentIndex = index;
    }
  }
  console.log(currentIndex);
  return currentIndex;
};
const arr = [1, 3, 5, 4, 7, 9, 6, 8, 2, 0];
arrFun(arr);

const peakIndexInMountainArray = (array) => {
  let right = array.length - 1;
  let left = 0;
  let ans = 0;
  while (left < right) {
    let middle = Math.ceil(right / 2);
    if (array[middle] < array[middle + 1]) {
    }
  }
};
peakIndexInMountainArray(arr);
