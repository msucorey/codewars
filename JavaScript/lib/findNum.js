"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.codewars.com/kata/unique-digit-sequence/train/

var defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findNum = function findNum(n) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultInputArray;

  if (array[n]) return array[n];
  return null;
};

exports.default = findNum;