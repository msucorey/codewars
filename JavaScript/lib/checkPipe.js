'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://www.codewars.com/kata/fix-the-pipes-number-2-is-it-leaking

var pipesConnectingDown = '┓┏┃┣┫┳╋'.split('');
var pipesConnectingLeft = '┓┛━┫┳┻╋'.split('');
var pipesConnectingUp = '┗┛┃┣┫┻╋'.split('');
var pipesConnectingRight = '┗┏━┣┳┻╋'.split('');

var pressurizeFrom = function pressurizeFrom(directions, pipeMap, pressureGrid, row, column) {
  var pressurized = false;
  var directionsToCheck = directions.split(' ');
  var lastRow = pipeMap.length - 1;
  var lastColumn = pipeMap[0].length - 1;
  directionsToCheck.forEach(function (direction) {
    switch (direction) {
      case 'up':
        if (row === 0 || pipesConnectingDown.includes(pipeMap[row - 1][column]) && pressureGrid[row - 1][column]) pressurized = true;
        break;
      case 'right':
        if (column === lastColumn || pipesConnectingLeft.includes(pipeMap[row][column + 1]) && pressureGrid[row][column + 1]) pressurized = true;
        break;
      case 'down':
        if (row === lastRow || pipesConnectingUp.includes(pipeMap[row + 1][column]) && pressureGrid[row + 1][column]) pressurized = true;
        break;
      case 'left':
        if (column === 0 || pipesConnectingRight.includes(pipeMap[row][column - 1]) && pressureGrid[row][column - 1]) pressurized = true;
        break;
      default:
        break;
    }
  });
  return pressurized;
};

var memory = {};

var hash = function hash() {
  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }

  return [].concat(inputs).map(function (input) {
    return input.toString();
  });
};

var checkForLeaksOut = function checkForLeaksOut(directions, pipeMap, row, column) {
  var leakOut = false;
  var directionsToCheck = directions.split(' ');
  var lastRow = pipeMap.length - 1;
  var lastColumn = pipeMap[0].length - 1;
  console.log('memory', memory);
  if (memory[hash(directions, pipeMap, row, column)]) {
    console.log('we have got this one');
    return memory[hash(directions, pipeMap, row, column)];
  }
  directionsToCheck.forEach(function (direction) {
    switch (direction) {
      case 'up':
        if (row !== 0 && !pipesConnectingDown.includes(pipeMap[row - 1][column])) leakOut = true;
        break;
      case 'right':
        if (column !== lastColumn && !pipesConnectingLeft.includes(pipeMap[row][column + 1])) {
          leakOut = true;
        }
        break;
      case 'down':
        if (row !== lastRow && !pipesConnectingUp.includes(pipeMap[row + 1][column])) {
          leakOut = true;
        }
        break;
      case 'left':
        if (column !== 0 && !pipesConnectingRight.includes(pipeMap[row][column - 1])) {
          leakOut = true;
        }
        break;
      default:
        break;
    }
  });
  memory[hash(directions, pipeMap, row, column)] = leakOut;
  return leakOut;
};

var checkPipe = function checkPipe(map) {
  var leakFound = false;
  var pipeMap = map.map(function (row) {
    return row.split('');
  });
  var pressureGrid = [].concat(_toConsumableArray(map)).map(function (row) {
    return row.split('').map(function () {
      return false;
    });
  });
  for (var n = 0; n < pipeMap.length; n += 1) {
    /* eslint-disable no-alert, no-loop-func */
    pipeMap.forEach(function (levelOfPipes, i) {
      levelOfPipes.forEach(function (pipeSection, j) {
        var pressurized = void 0;
        switch (pipeSection) {
          case '╋':
            // TODO pressurize automatically
            pressurized = pressureGrid[i][j] || pressurizeFrom('up right down left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up right down left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┗':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up right', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up right', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┓':
            pressurized = pressureGrid[i][j] || pressurizeFrom('down left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('down left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┏':
            pressurized = pressureGrid[i][j] || pressurizeFrom('right down', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('right down', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┛':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '━':
            pressurized = pressureGrid[i][j] || pressurizeFrom('right left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('right left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┃':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up down', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up down', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┣':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up right down', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up right down', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┫':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up down left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up down left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┳':
            pressurized = pressureGrid[i][j] || pressurizeFrom('right down left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('right down left', pipeMap, i, j)) leakFound = true;
            }
            break;
          case '┻':
            pressurized = pressureGrid[i][j] || pressurizeFrom('up right left', pipeMap, pressureGrid, i, j);
            if (pressurized) {
              pressureGrid[i][j] = true;
              if (checkForLeaksOut('up right left', pipeMap, i, j)) leakFound = true;
            }
            break;
          default:
            break;
        }
      });
    });
  }
  return !leakFound;
};

module.exports = checkPipe;