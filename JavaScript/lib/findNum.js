'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.codewars.com/kata/unique-digit-sequence/train/

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var noIntersection = function noIntersection(num1, num2) {
  var num1String = num1.toString();
  var num2String = num2.toString();
  var num1Array = num1String.split('');
  var num2Array = num2String.split('');
  return !num1Array.some(function (el) {
    return num2Array.includes(el);
  });
};

var pushNextNum = function pushNextNum() {
  var lastNum = array[array.length - 1];

  var nextSeqNum = 10;

  var found = false;
  while (!found) {
    nextSeqNum += 1;
    if (!array.slice(9).includes(nextSeqNum)) {
      if (noIntersection(lastNum, nextSeqNum)) found = true;
    }
  }
  array.push(nextSeqNum);
};

var findNum = function findNum(n) {
  while (true) {
    if (array[n]) return array[n];
    pushNextNum();
  }
};

exports.default = findNum;