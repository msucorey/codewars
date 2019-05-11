"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var determinant = function determinant(matrix) {
  // recursion base cases
  if (matrix.length === 1) return matrix[0][0];
  if (matrix.length === 2) {
    var _matrix$ = _slicedToArray(matrix[0], 2),
        a = _matrix$[0],
        b = _matrix$[1];

    var _matrix$2 = _slicedToArray(matrix[1], 2),
        c = _matrix$2[0],
        d = _matrix$2[1];

    return a * d - b * c;
  }
  // set up to recurse for larger matrices
  var result = 0;
  var addSubtract = 1; // will be flipped as result builds
  matrix[0].forEach(function (itemInFirstRow, idx) {
    var subMatrix = [].concat(_toConsumableArray(matrix));
    subMatrix.shift();
    subMatrix.forEach(function (row, subIdx) {
      subMatrix[subIdx] = row.filter(function (_, i) {
        return i !== idx;
      });
    });
    result += itemInFirstRow * determinant(subMatrix) * addSubtract; // recurse
    addSubtract *= -1;
  });
  return result;
};

module.exports = determinant;