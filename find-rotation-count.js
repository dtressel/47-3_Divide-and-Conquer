function findRotationCount(arr) {
  //finds pivot index
  let pivotIndex = 0;
  let startIndex = 0;
  let endIndex = arr.length -1;
  let lastTestVal = arr[0];
  let expectLarger = true;
  while (startIndex <= endIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    // if didn't cross pivot
    if ((arr[testIndex] > lastTestVal) === expectLarger) {
      if (expectLarger) {
        startIndex = testIndex + 1;
      } else {
        pivotIndex = testIndex;
        endIndex = testIndex - 1;
      }
    } else { //(if crossed pivot)
      if (expectLarger) {
        pivotIndex = testIndex;
        endIndex = testIndex - 1;
        expectLarger = false;
      } else {
        startIndex = testIndex + 1;
        expectLarger = true;
      }
    }
    lastTestVal = arr[testIndex];
  }
  return pivotIndex;
}

module.exports = findRotationCount