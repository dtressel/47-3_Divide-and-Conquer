// Option 1 (longer but maybe slightly more efficient)

function sortedFrequency(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let firstOccurance = arr.length + 2;
  let lastOccurance = arr.length;
  // Find first occurance of num
  while (startIndex <= endIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    if (arr[testIndex] < num) {
      startIndex = testIndex + 1;
    }
    else if (arr[testIndex] > num) {
      endIndex = testIndex - 1;
    }
    else {
      firstOccurance = testIndex;
      endIndex = testIndex - 1;
    }
  }
  startIndex = 0;
  endIndex = arr.length - 1;
  // Find last occurance of num
  while (startIndex <= endIndex) {
    const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    if (arr[testIndex] < num) {
      startIndex = testIndex + 1;
    }
    else if (arr[testIndex] > num) {
      endIndex = testIndex - 1;
    }
    else {
      lastOccurance = testIndex;
      startIndex = testIndex + 1;
    }
  }
  return lastOccurance - firstOccurance + 1;
}

// Option 2 (shorter but maybe slightly less efficient)
 
function sortedFrequency2(arr, num) {
  let firstOccurance = arr.length + 2;
  let lastOccurance = arr.length;
  for (let i = 0; i < 2; i++) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
      const testIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
      if (arr[testIndex] < num) {
        startIndex = testIndex + 1;
      }
      else if (arr[testIndex] > num) {
        endIndex = testIndex - 1;
      }
      else if (i === 0) {
        firstOccurance = testIndex;
        endIndex = testIndex - 1;
      }
      else {
        lastOccurance = testIndex;
        startIndex = testIndex + 1;
      }
    }
  }
  return lastOccurance - firstOccurance + 1;
}

module.exports = sortedFrequency