"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMiddleChar = exports.getMiddleChar = function getMiddleChar(inputString) {
  var length = inputString.length;
  var isEven = Math.floor(length / 2) === length / 2;

  if (isEven) {
    var startChar = length / 2 - 1;
    var endChar = startChar + 1;
    return inputString.slice(startChar, endChar + 1);
  } else {
    var targetChar = Math.floor(length / 2);
    return inputString[targetChar];
  }
};

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

exports.default = getMiddleChar;