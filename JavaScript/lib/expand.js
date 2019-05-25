'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://www.codewars.com/kata/binomial-expansion

var expand = exports.expand = function expand(expression) {
  console.log('expression', expression);

  var localCopy = expression;

  var a = void 0;
  var b = void 0;
  var sign = 1;
  var exponent = void 0;
  var expressionParsed = false;

  while (!expressionParsed) {
    localCopy = localCopy.slice(1);
    var thisChar = localCopy[0];
    if (thisChar === '-') {
      sign = -1;
    }
    if ('123456789'.includes(thisChar)) {
      if (a && b) exponent = +thisChar;
      if (a && !b) b = sign * thisChar;
      if (!a) a = sign * thisChar;
      sign = 1;
    }
    expressionParsed = a && b && exponent;
  }

  return null;
};

exports.default = expand;