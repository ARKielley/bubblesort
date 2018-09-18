function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++, swapped = false) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j);
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }

  return arr;
}

function swap(arr, secondIndex) {
  [arr[secondIndex - 1], arr[secondIndex]] = [arr[secondIndex], arr[secondIndex - 1]];
}
