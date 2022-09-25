function findFloor(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let lastTestVal;
  let testVal;
  while(startIndex <= endIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    lastTestVal = testVal;
    testVal = arr[testIndex];
    if(testVal < num) {
      startIndex = testIndex + 1;
    } else if(testVal > num) {
      endIndex = testIndex - 1;
    } else {
      return num;
    }
  }
  if (testVal < num) {
    return testVal;
  } else if (lastTestVal < num) {
    return lastTestVal;
  } else {
    return -1;
  }
}

module.exports = findFloor