"use strict";

function stray(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  var length = numbers.length;
  var midpoint = (length - 1) / 2;
  if (numbers[0] === numbers[length - 1]) {
    return stray(numbers.slice(1, length - 1));
  } else if (numbers[0] === numbers[midpoint]) {
    return numbers[length - 1];
  } else {
    return numbers[0];
  }
}

console.log(stray([1, 1, 2]));
// 2