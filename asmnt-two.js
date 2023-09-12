function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let temp = [];
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(sortedLeft, sortedRight) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      result.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      result.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(
    sortedLeft.slice(leftIndex),
    sortedRight.slice(rightIndex)
  );
}

const unsortedArray = [62, 59, 99, 62, 94, 53, 52, 25, 5, 51];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
