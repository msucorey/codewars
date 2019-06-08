'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://www.codewars.com/kata/unique-digit-sequence/train/

var intersection = function intersection(setA, setB) {
  return [].concat(_toConsumableArray(setA)).filter(function (el) {
    return setB.includes(el);
  });
};

var nextNum = function nextNum(array) {
  var lastNum = array[array.length - 1];
  var lastNumDigits = lastNum.toString().split('');

  var nextSeqNum = array.length;

  while (true) {
    if (!array.includes(nextSeqNum)) {
      var nextSeqNumDigits = nextSeqNum.toString().split('');
      var commonDigits = intersection(lastNumDigits, nextSeqNumDigits);
      if (!commonDigits.length) console.log('nextSeqNum', nextSeqNum);
      if (!commonDigits.length) return nextSeqNum;
    }
    nextSeqNum += 1;
  }
};

var defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findNum = function findNum(n) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultInputArray;

  return array[n] || findNum(n, [].concat(_toConsumableArray(array)).concat(nextNum([].concat(_toConsumableArray(array)))));
};

exports.default = findNum;