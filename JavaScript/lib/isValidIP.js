'use strict';

function isValidIP(str) {
  var words = str.split('.');
  if (words.length === 4) {
    for (var i = 0; i < words.length; i++) {
      var thisString = words[i];
      var thisWord = parseInt(thisString);
      if (isNaN(thisString) || thisWord > 255 || thisWord < 0) {
        return false;
      }
      if (thisWord.toString().length !== thisString.length) {
        return false;
      }
    }
    //4 words validate to numbers 0-255 w/o leading or trailing zeros
    return true;
  }
  return false;
}

console.log(isValidIP('1.2.3.4'));
console.log(isValidIP('123.456.78.90'));

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. Input to the function is guaranteed to be a single string.
//
// Examples of valid inputs: 1.2.3.4 123.45.67.89
//
// Examples of invalid inputs: 1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089