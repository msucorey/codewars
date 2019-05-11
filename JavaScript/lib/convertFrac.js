"use strict";

function convertFrac(lst) {
  var denoms = lst.map(function (el) {
    return el[1];
  });
  denoms = denoms.sort(function (a, b) {
    return b - a;
  });
  var lcd = 1;
  var result = "";
  for (var idx in denoms) {
    var thisDenom = denoms[idx];
    if (lcd % thisDenom > 0) {
      lcd *= thisDenom;
    }
  }
  for (var _idx in lst) {
    var thisMultiplier = lcd / lst[_idx][1];
    result = result.concat("(").concat(lst[_idx][0] * thisMultiplier).concat(",").concat(lcd).concat(")");
  }
  return result;
}

var lst = [[1, 2], [1, 3], [1, 4]];
convertFrac(lst);
// "(6,12)(4,12)(3,12)"