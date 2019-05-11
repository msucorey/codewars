"use strict";

function moveZeros(arr) {
  var result = [];
  var zeros = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(0);
    } else {
      result.push(arr[i]);
    }
  }
  result = result.concat(zeros);
  return result;
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
// [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]