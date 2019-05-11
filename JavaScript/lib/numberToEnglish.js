'use strict';

var digits = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};
var tens = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};

var notNumber = function notNumber(input) {
  return typeof input !== 'number';
};

var notInRange = function notInRange(number) {
  return number < 0 || number > 99999;
};

var notInteger = function notInteger(number) {
  return Math.round(number) !== number;
};

var isBogus = function isBogus(input) {
  return notNumber(input) || notInRange(input) || notInteger(input);
};

var numberToEnglish = function numberToEnglish(number) {
  var firstPass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isBogus(number)) return '';
  if (number === 0) return firstPass ? 'zero' : '';
  if (number < 20) return digits[number];
  if (number > 999) {
    return (numberToEnglish(Math.floor(number / 1000), false) + ' thousand ' + numberToEnglish(number % 1000, false)).trim();
  }
  if (number > 99) {
    return (numberToEnglish(Math.floor(number / 100), false) + ' hundred ' + numberToEnglish(number % 100, false)).trim();
  }
  return (tens[Math.floor(number / 10)] + ' ' + numberToEnglish(number % 10, false)).trim();
};

console.log(numberToEnglish(0));
console.log(numberToEnglish(7));
console.log(numberToEnglish(11));
console.log(numberToEnglish(20));
console.log(numberToEnglish(47));
console.log(numberToEnglish(100));
console.log(numberToEnglish(305));
console.log(numberToEnglish(4002));
console.log(numberToEnglish(3892));
console.log(numberToEnglish(6800));
console.log(numberToEnglish(14111));
console.log(numberToEnglish(20005));
console.log(numberToEnglish(99999));