'use strict';

function removeZeros(array) {
  var sorted = false;
  var leftZero = void 0,
      rightZero = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      leftZero = array[i] === 0 || array[i] === '0';
      rightZero = array[i + 1] === 0 || array[i + 1] === '0';
      if (leftZero && !rightZero) {
        var _ref = [array[i + 1], array[i]];
        array[i] = _ref[0];
        array[i + 1] = _ref[1];

        sorted = false;
      }
    }
  }
  return array;
}

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

removeZeros(input);
// solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];