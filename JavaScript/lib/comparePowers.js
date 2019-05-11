"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function comparePowers(n1, n2) {
  var _n = _slicedToArray(n1, 2),
      base1 = _n[0],
      exp1 = _n[1];

  var _n2 = _slicedToArray(n2, 2),
      base2 = _n2[0],
      exp2 = _n2[1];

  var discreteReturn = function discreteReturn(n) {
    if (n > 0) return 1;
    if (n < 0) return -1;
    return 0;
  };

  // equal base
  if (base1 === base2) {
    // check '1' case
    return base1 > 1 ? discreteReturn(exp2 - exp1) : 0;
  }

  // equal exponents
  if (exp1 === exp2) return discreteReturn(base2 - base1);

  // shrink powers before brute force
  var newExp1 = exp1,
      newExp2 = exp2;

  while (newExp1 > 2 && newExp2 > 2) {
    newExp1 /= 2;
    newExp2 /= 2;
  }

  return discreteReturn(base2 ** newExp2 - base1 ** newExp1);
}

exports.default = comparePowers;