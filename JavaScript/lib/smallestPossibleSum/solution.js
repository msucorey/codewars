"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var solution = function solution(numbers) {
  var transformationMadeOnLastPass = true;
  var transformationMadeOnThisPass = false;
  var numbersCopy = [].concat(_toConsumableArray(numbers));
  var index = 0;
  while (transformationMadeOnLastPass) {
    var _ref = [numbersCopy[index - 1], numbersCopy[index], numbersCopy[index + 1]],
        prev = _ref[0],
        curr = _ref[1],
        next = _ref[2];

    if (curr > prev) {
      numbersCopy[index] = curr % prev || prev;
      transformationMadeOnThisPass = true;
    } else if (curr > next) {
      numbersCopy[index] = curr % next || next;
      transformationMadeOnThisPass = true;
      index += 1;
    }
    index += 1;
    if (index >= numbers.length) {
      index = 0;
      transformationMadeOnLastPass = transformationMadeOnThisPass;
      transformationMadeOnThisPass = false;
    }
  }
  return numbersCopy.reduce(function (x, y) {
    return x + y;
  });
};

module.exports = solution;