'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.codewars.com/kata/unique-digit-sequence/train/

var defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var lowestNextSeqNum = 11;

var noIntersectionMemo = {};

var noIntersection = function noIntersection(num1, num2) {
  var num1String = num1.toString();
  var num2String = num2.toString();
  var combinedString = num1String + num2String;
  if (noIntersectionMemo[combinedString]) return noIntersectionMemo[combinedString][0];
  var num1Array = num1String.split('');
  var num2Array = num2String.toString().split('');
  for (var i = 0; i < num1Array.length; i += 1) {
    if (num2Array.includes(num1Array[i])) {
      noIntersection[combinedString] = [false];
      return false;
    }
  }
  noIntersection[combinedString] = [true];
  return true;
};

var nextNum = function nextNum(array) {
  var lastNum = array[array.length - 1];

  var nextSeqNum = lowestNextSeqNum;

  var found = false;
  while (!found) {
    if (!array.includes(nextSeqNum)) {
      if (noIntersection(lastNum, nextSeqNum)) found = true;
    }
    if (!found) nextSeqNum += 1;
  }
  console.log('nextSeqNum', nextSeqNum, array.length - 1);
  if (nextSeqNum === lowestNextSeqNum + 1) lowestNextSeqNum = nextSeqNum;
  if (found) return nextSeqNum;
};

var findNum = function findNum(n) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultInputArray;
  return array[n] || findNum(n, array.concat(nextNum(array)));
};

exports.default = findNum;