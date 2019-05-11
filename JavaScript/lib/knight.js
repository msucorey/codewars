'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var distanceBetweenSpaces = function distanceBetweenSpaces(firstSpace, secondSpace) {
  var _firstSpace = _slicedToArray(firstSpace, 2),
      x1 = _firstSpace[0],
      y1 = _firstSpace[1];

  var _secondSpace = _slicedToArray(secondSpace, 2),
      x2 = _secondSpace[0],
      y2 = _secondSpace[1];

  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

var spacesAreEqual = function spacesAreEqual(firstSpace, secondSpace) {
  return firstSpace.toString() === secondSpace.toString();
};

var spacesAreAdjacent = function spacesAreAdjacent(firstSpace, secondSpace) {
  var _firstSpace2 = _slicedToArray(firstSpace, 2),
      x1 = _firstSpace2[0],
      y1 = _firstSpace2[1];

  var _secondSpace2 = _slicedToArray(secondSpace, 2),
      x2 = _secondSpace2[0],
      y2 = _secondSpace2[1];

  var xDiff = Math.abs(x1 - x2);
  var yDiff = Math.abs(y1 - y2);
  return xDiff + yDiff === 1;
};

var spacesAreCornering = function spacesAreCornering(firstSpace, secondSpace) {
  var _firstSpace3 = _slicedToArray(firstSpace, 2),
      x1 = _firstSpace3[0],
      y1 = _firstSpace3[1];

  var _secondSpace3 = _slicedToArray(secondSpace, 2),
      x2 = _secondSpace3[0],
      y2 = _secondSpace3[1];

  var xDiff = Math.abs(x1 - x2);
  var yDiff = Math.abs(y1 - y2);
  return xDiff === 1 && yDiff === 1;
};

var spacesOut = function spacesOut(firstSpace, secondSpace, number) {
  var _firstSpace4 = _slicedToArray(firstSpace, 2),
      x1 = _firstSpace4[0],
      y1 = _firstSpace4[1];

  var _secondSpace4 = _slicedToArray(secondSpace, 2),
      x2 = _secondSpace4[0],
      y2 = _secondSpace4[1];

  var xDiff = Math.abs(x1 - x2);
  var yDiff = Math.abs(y1 - y2);
  return (xDiff === number && !yDiff) ^ (yDiff === number && !xDiff);
};

var longLeg = function longLeg(firstSpace, secondSpace) {
  var _firstSpace5 = _slicedToArray(firstSpace, 2),
      x1 = _firstSpace5[0],
      y1 = _firstSpace5[1];

  var _secondSpace5 = _slicedToArray(secondSpace, 2),
      x2 = _secondSpace5[0],
      y2 = _secondSpace5[1];

  var xDiff = Math.abs(x1 - x2);
  var yDiff = Math.abs(y1 - y2);
  return xDiff === 1 && yDiff === 3 || xDiff === 3 && yDiff === 1;
};

var isValidMove = function isValidMove(move) {
  var _move = _slicedToArray(move, 2),
      x = _move[0],
      y = _move[1];

  return x >= 0 && y >= 0 && x <= 7 && y <= 7;
};

var possibleKnightMoves = function possibleKnightMoves(startPos) {
  var possibleMoves = [];
  [[0, 2], [0, -2], [2, 0], [-2, 0]].forEach(function (firstMove) {
    if (firstMove[0]) {
      possibleMoves.push([firstMove[0], firstMove[1] + 1]);
      possibleMoves.push([firstMove[0], firstMove[1] - 1]);
    } else {
      possibleMoves.push([firstMove[0] + 1, firstMove[1]]);
      possibleMoves.push([firstMove[0] - 1, firstMove[1]]);
    }
  });
  // console.log('so far possible moves are ' + possibleMoves);
  return possibleMoves.map(function (move) {
    return [move[0] + startPos[0], move[1] + startPos[1]];
  }).filter(isValidMove);
};

var coordConvert = function coordConvert(coord) {
  var columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  if (typeof coord === 'string') {
    var _coord = _slicedToArray(coord, 2),
        alpha = _coord[0],
        num = _coord[1];

    var column = columnLetters.indexOf(alpha);
    var row = num - 1;
    return [column, row];
  }
  // console.log('coord is' + coord);

  var _coord2 = _slicedToArray(coord, 2),
      x = _coord2[0],
      y = _coord2[1];

  return columnLetters[x] + (y + 1);
};

function knight(start, finish) {
  if (start === finish) return 0;
  var startSpace = coordConvert(start);
  // console.log('startspace is ' + startSpace);
  var finishSpace = coordConvert(finish);
  // console.log('finishspace is ' + finishSpace);
  if (spacesAreAdjacent(startSpace, finishSpace)) return 2;
  if (spacesOut(startSpace, finishSpace, 2)) return 2;
  if (longLeg(startSpace, finishSpace)) return 2;
  if (spacesAreCornering(startSpace, finishSpace)) return 3;
  if (spacesOut(startSpace, finishSpace, 5)) return 3;
  var possibleMoves = possibleKnightMoves(startSpace);
  if (possibleMoves.includes(finishSpace)) return 1;
  // console.log('possible moves are ' + possibleMoves);
  var distances = possibleMoves.map(function (space) {
    return distanceBetweenSpaces(space, finishSpace);
  });
  // console.log('distances are ' + distances);
  var minDistance = [].concat(_toConsumableArray(distances)).sort(function (a, b) {
    return a - b;
  })[0];
  // console.log('min distance is ' + minDistance);
  var minDistIndex = distances.indexOf(minDistance);
  var nextMove = possibleMoves[minDistIndex];
  // console.log('next move is ' + coordConvert(nextMove));
  return 1 + knight(coordConvert(nextMove), finish);
}

console.log(knight('a1', 'c1'));
console.log(knight('a1', 'f1'));
console.log(knight('a1', 'f3'));
console.log(knight('a1', 'f4'));
console.log(knight('a1', 'f7'));