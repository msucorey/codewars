'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.codewars.com/kata/unique-digit-sequence/train/

var defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var noIntersectionMemo = {};

var noIntersection = function noIntersection(num1, num2) {
  console.log('num1', num1);
  console.log('num2', num2);
  var num1String = num1.toString();
  var num2String = num2.toString();
  var combinedString = num1String + num2String;
  if (noIntersectionMemo[combinedString]) return noIntersectionMemo[combinedString][0];
  var numArray = num1String.split('').concat(num2String.toString().split(''));
  var numSet = new Set(numArray);
  if (numArray.length === numSet.size) {
    noIntersection[combinedString] = [true];
    console.log('true');
    return true;
  }
  noIntersection[combinedString] = [false];
  console.log('false');
  return false;
};

var nextNum = function nextNum(array) {
  var lastNum = array[array.length - 1];
  console.log('lastNum', lastNum);
  var nextSeqNum = array[Math.floor(array.length / 4)];
  console.log('nextSeqNum', nextSeqNum);
  var found = false;
  while (!found) {
    nextSeqNum += 1;
    if (!array.includes(nextSeqNum)) {
      if (noIntersection(lastNum, nextSeqNum)) found = true;
    }
  }
  console.log('returning', nextSeqNum);
  return nextSeqNum;
};

var findNum = function findNum(n) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultInputArray;
  return array[n] || findNum(n, array.concat(nextNum(array)));
};

console.log('findNum(11)', findNum(11));

exports.default = findNum;