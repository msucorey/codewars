function hasUniqueChars(str) {
  const previousChars = [];
  let result = true;
  let i = 0;
  const length = str.length;
  while (i < length) { // stop when false, return
    const thisChar = str[i];
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

console.log(hasUniqueChars('  nAa'));// ,false)
console.log(hasUniqueChars('abcdef'));// ,true)
console.log(hasUniqueChars('++-'));// ,false)
