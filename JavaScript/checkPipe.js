// https://www.codewars.com/kata/fix-the-pipes-number-2-is-it-leaking

const pipesConnectingDown = '┓┏┃┣┫┳╋'.split('');
const pipesConnectingLeft = '┓┛━┫┳┻╋'.split('');
const pipesConnectingUp = '┗┛┃┣┫┻╋'.split('');
const pipesConnectingRight = '┗┏━┣┳┻╋'.split('');

const pressurizeFrom = (directions, pipeMap, pressureGrid, row, column) => {
  let pressurized = false;
  const directionsToCheck = directions.split(' ');
  const lastRow = pipeMap.length - 1;
  const lastColumn = pipeMap[0].length - 1;
  directionsToCheck.forEach((direction) => {
    switch (direction) {
      case 'up':
        if (row === 0 || (pipesConnectingDown.includes(pipeMap[row - 1][column])
          && pressureGrid[row - 1][column])) pressurized = true;
        break;
      case 'right':
        if (column === lastColumn || (pipesConnectingLeft.includes(pipeMap[row][column + 1])
          && pressureGrid[row][column + 1])) pressurized = true;
        break;
      case 'down':
        if (row === lastRow || (pipesConnectingUp.includes(pipeMap[row + 1][column])
          && pressureGrid[row + 1][column])) pressurized = true;
        break;
      case 'left':
        if (column === 0 || (pipesConnectingRight.includes(pipeMap[row][column - 1])
          && pressureGrid[row][column - 1])) pressurized = true;
        break;
      default:
        break;
    }
  });
  return pressurized;
};

const checkForLeaksOut = (directions, pipeMap, row, column) => {
  let leakOut = false;
  const directionsToCheck = directions.split(' ');
  const lastRow = pipeMap.length - 1;
  const lastColumn = pipeMap[0].length - 1;
  directionsToCheck.forEach((direction) => {
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
  return leakOut;
};

const checkPipe = (map) => {
  console.log('map', map);
  let leakFound = false;
  const pipeMap = map.map(row => row.split(''));
  const pressureGrid = [...map].map(row => row.split('').map(false));
  pipeMap.forEach((levelOfPipes, i) => {
    levelOfPipes.forEach((pipeSection, j) => {
      console.log(levelOfPipes);
      let pressurized;
      switch (pipeSection) {
        case '╋': // TODO pressurize automatically
          pressurized = pressureGrid[i][j] || pressurizeFrom('up right down left', pressureGrid, i, j);
          if (pressurized) {
            pressureGrid[i][j] = true;
            if (checkForLeaksOut('up right down left', pipeMap, i, j)) leakFound = true;
          }
          console.log(pipeSection);
          break;
        case '┗':
          console.log(pipeSection);
          break;
        case '┓':
          console.log(pipeSection);
          break;
        case '┏':
          console.log(pipeSection);
          break;
        case '┛':
          console.log(pipeSection);
          break;
        case '━':
          console.log(pipeSection);
          break;
        case '┃':
          console.log(pipeSection);
          break;
        case '┣':
          console.log(pipeSection);
          break;
        case '┫':
          console.log(pipeSection);
          break;
        case '┳':
          console.log(pipeSection);
          break;
        case '┻':
          console.log(pipeSection);
          break;
        default:
          break;
      }
    });
  });
  return !leakFound;
};

module.exports = checkPipe;
