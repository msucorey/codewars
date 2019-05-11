"use strict";

function XO(str) {
  var xCnt = 0;
  var oCnt = 0;
  for (var i = 0; i < str.length; i++) {
    var thisChar = str[i];
    if (thisChar === "X" || thisChar === "x") {
      xCnt++;
    } else if (thisChar === "O" || thisChar === "o") {
      oCnt++;
    }
  }
  return xCnt === oCnt;
}

console.log(XO('xo'));
// true
console.log(XO("xxOo"));
// true
console.log(XO("xxxm"));
// false
console.log(XO("Oo"));
// false
console.log(XO("ooom"));
// false