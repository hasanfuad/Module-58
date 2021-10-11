const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let start = 0;
let end = numberList.length - 1;

function binarySearch(numberList, target) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (numberList[mid] === target) {
      return mid;
    }

    if (numberList[mid] < target) {
      start = mid + 1;
    }

    if (numberList[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

const index = binarySearch(numberList, 5);

console.log("Index of targeted value: ", index);
