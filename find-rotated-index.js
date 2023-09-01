function findRotatedIndex(arr, num) {
  let correctSideOfPivot;
  let startIndex = 0;
  let endIndex = arr.length -1;
  let lastTestVal = arr[0];
  let expectLarger = true;
  if (num < arr[0]) {
    correctSideOfPivot = false;
  } else if (num > arr[0]) {
    correctSideOfPivot = true;
  } else {
    return 0;
  }
  while (startIndex <= endIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    const testVal = arr[testIndex];
    // if traveling from lastTestIndex to testIndex, crossed the pivot;
    if ((testVal > lastTestVal) !== expectLarger) {
      correctSideOfPivot = !correctSideOfPivot;
    }
    if (testVal === num) {
      return testIndex;
    } else if (((num < testVal) && correctSideOfPivot) || ((num > testVal) && !correctSideOfPivot)) {
      expectLarger = false;
      endIndex = testIndex - 1;
    } else {
      expectLarger = true;
      startIndex = testIndex + 1;
    }
    lastTestVal = testVal;
  }
  return -1;
}

module.exports = findRotatedIndex

/* 
Notes:
Need a variable to tell if on right or wrong side of pivot:
  let correctSideOfPivot;
Find value of arr[0];
Test if num is larger or smaller than arr[0];
  if smaller then correctSideOfPivot = false;
  if larger then correctSideOfPivot = true;
Whenever we cross pivot !correctSideOfPivot;
if (num === testIndex)
  return testIndex;
if (num < testIndex && correctSideOfPivot)
  Then test to the left
if (num > testIndex && correctSideOfPivot)
  Then test to the right
if (num < testInde) && !correctSideOfPivot)
  Then test to the right
if (num > testIndex && !correctSideOfPivot)
  Then test to the left
Condense the above into a single if else.
*/