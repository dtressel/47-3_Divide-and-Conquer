function countZeroes(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let earliest0 = arr.length;
  while (endIndex >= startIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    if (arr[testIndex] === 0) {
      earliest0 = testIndex;
      endIndex = testIndex - 1;
    } else {
      startIndex = testIndex + 1;
    }
  }
  return arr.length - earliest0;
}

module.exports = countZeroes