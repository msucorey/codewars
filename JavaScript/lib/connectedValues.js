'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://www.codewars.com/kata/connecting-values

var CONNECTED = 'connected value';
var connectedValuesArr = void 0;

var initializeTracking = function initializeTracking(arrayToCopy) {
  connectedValuesArr = [].concat(_toConsumableArray(arrayToCopy));
  for (var x = 0; x < connectedValuesArr.length; x += 1) {
    connectedValuesArr[x] = [].concat(_toConsumableArray(arrayToCopy[0]));
  }
};

var connectedHere = function connectedHere(coords) {
  return connectedValuesArr[coords[0]][coords[1]] === CONNECTED;
};

var connectAroundTheseCoords = function connectAroundTheseCoords(matrix, coords, valueToMatch) {
  var _coords = _slicedToArray(coords, 2),
      i = _coords[0],
      j = _coords[1];

  var width = matrix[0].length;
  var height = matrix.length;
  var newConnections = 0;
  [-1, 0, 1].forEach(function (rowAdj) {
    var thisI = i + rowAdj;
    if (thisI < 0 || thisI >= height) return;
    [-1, 0, 1].forEach(function (colAdj) {
      if (rowAdj === 0 && colAdj === 0) return;
      var thisJ = j + colAdj;
      if (thisJ < 0 || thisJ > width) return;
      if (connectedHere([thisI, thisJ])) return;
      if (matrix[thisI][thisJ] === valueToMatch) {
        connectedValuesArr[thisI][thisJ] = CONNECTED;
        newConnections += 1;
      }
    });
  });
  return newConnections;
};

var checkForNewAdjacencies = function checkForNewAdjacencies(matrix, valueToMatch) {
  var connectionsMade = 0;
  matrix.forEach(function (row, i) {
    row.forEach(function (_, j) {
      if (!connectedHere([i, j])) return;
      connectionsMade += connectAroundTheseCoords(matrix, [i, j], valueToMatch);
    });
  });
  return connectionsMade > 0;
};

var connectedValueCoordinates = function connectedValueCoordinates() {
  var result = [];
  connectedValuesArr.forEach(function (row, i) {
    row.forEach(function (_, j) {
      if (connectedHere([i, j])) result.push([i, j]);
    });
  });
  return result;
};

var connectedValues = function connectedValues(arr, val, coord) {
  initializeTracking(arr);

  var _coord = _slicedToArray(coord, 2),
      row = _coord[0],
      column = _coord[1];

  if (arr[row][column] !== val) return [];
  connectedValuesArr[row][column] = CONNECTED;
  var newAdjacenciesFound = true;
  var passes = 0;
  var maxPasses = Math.max(arr.length, arr[0].length);
  while (newAdjacenciesFound && passes <= maxPasses) {
    newAdjacenciesFound = checkForNewAdjacencies(arr, val);
    passes += 1;
    console.log('connectedValueCoordinates()', connectedValueCoordinates());
  }
  return connectedValueCoordinates();
};

exports.default = connectedValues;