'use strict';

function hasUniqueChars(str) {
  var previousChars = [];
  var result = true;
  var i = 0;
  var length = str.length;
  while (i < length) {
    // stop when false, return
    var thisChar = str[i];
    if (previousChars.includes(thisChar)) {
      result = false;
      break;
    }
    previousChars.push(thisChar);
    i += 1;
  }
  return result;
}
// alternatively, keep a moving slice index, but this is slightly more memory efficient

console.log(hasUniqueChars('  nAa')); // ,false)
console.log(hasUniqueChars('abcdef')); // ,true)
console.log(hasUniqueChars('++-')); // ,false)