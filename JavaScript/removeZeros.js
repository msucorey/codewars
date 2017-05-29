function removeZeros(array) {
  let sorted = false;
  let leftZero, rightZero = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i ++) {
      leftZero = (array[i] === 0) || (array[i] === '0');
      rightZero = (array[i + 1] === 0) || (array[i + 1] === '0');
      if (leftZero && !rightZero) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
  }
  return array;
}

const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

removeZeros(input);
// solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
