'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var fullGrid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

var pairsOfBlockingLetters = function pairsOfBlockingLetters(letter) {
  switch (letter) {
    case 'A':
      return [['B', 'C'], ['E', 'I'], ['D', 'G']];
    case 'B':
      return [['E', 'H']];
    case 'C':
      return [['B', 'A'], ['E', 'G'], ['F', 'I']];
    case 'D':
      return [['E', 'F']];
    case 'E':
      return [];
    case 'F':
      return [['E', 'D']];
    case 'G':
      return [['D', 'A'], ['E', 'C'], ['H', 'I']];
    case 'H':
      return [['E', 'B']];
    case 'I':
      return [['H', 'G'], ['E', 'A'], ['F', 'C']];
    default:
      return null;
  }
};

var flatPairs = function flatPairs(pairs) {
  var result = [];
  pairs.forEach(function (pair) {
    result.push(pair[0]);
    result.push(pair[1]);
  });
  return result;
};

var otherLetters = function otherLetters(letter) {
  var thisAndBlockers = flatPairs(pairsOfBlockingLetters(letter)).concat([letter]);
  return fullGrid.filter(function (x) {
    return !thisAndBlockers.includes(x);
  });
};

var countPatternsFrom = function countPatternsFrom(firstDot, length) {
  var grid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fullGrid;

  if (length < 1 || length > 9) return 0;
  if (length === 1) return 1;

  var restOfGrid = grid.filter(function (x) {
    return x !== firstDot;
  });
  var options = 0;

  pairsOfBlockingLetters(firstDot).forEach(function (pair) {
    var _pair = _slicedToArray(pair, 2),
        firstLetter = _pair[0],
        blockedLetter = _pair[1];

    if (restOfGrid.includes(firstLetter)) {
      options += countPatternsFrom(firstLetter, length - 1, restOfGrid);
    } else if (restOfGrid.includes(blockedLetter)) {
      options += countPatternsFrom(blockedLetter, length - 1, restOfGrid);
    }
  });

  otherLetters(firstDot).forEach(function (letter) {
    if (restOfGrid.includes(letter)) {
      options += countPatternsFrom(letter, length - 1, restOfGrid);
    }
  });
  return options;
};