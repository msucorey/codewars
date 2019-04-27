// https://www.codewars.com/kata/fix-the-pipes-number-2-is-it-leaking

const pressurizeFrom = (directions, xCoord, yCoord) => {
  console.log(directions, xCoord, yCoord);
  return true;
};

const checkForLeaksOut = (pressureGrid, directions, i, j) => {
  console.log(pressureGrid, directions, i, j);
  return true;
}

const checkPipe = (map) => {
  console.log('map', map);
  const pressureGrid = [...map];
  let leakFound = false;
  pressureGrid.map(row => row.split('').map(false));
  map.forEach((level, i) => {
    level.split('').forEach((pipeSection, j) => {
      console.log(level);
      let pressurized;
      switch (pipeSection) {
        case '╋':
          pressurized = pressureGrid[i][j] || pressurizeFrom('up right down left', i, j);
          if (pressurized) {
            pressureGrid[i][j] = true;
            if (checkForLeaksOut(pressureGrid, 'up right down left', i, j)) leakFound = true;
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
