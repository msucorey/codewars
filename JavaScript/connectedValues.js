// https://www.codewars.com/kata/connecting-values

const CONNECTED = 'connected value';
let connectedValuesArr;

const initializeTracking = (arrayToCopy) => {
  connectedValuesArr = [...arrayToCopy];
  for (let x = 0; x < connectedValuesArr.length; x += 1) {
    connectedValuesArr[x] = [...arrayToCopy[0]];
  }
};

const connectedHere = coords => connectedValuesArr[coords[0]][coords[1]] === CONNECTED;

const connectAroundTheseCoords = (matrix, coords, valueToMatch) => {
  const [i, j] = coords;
  const width = matrix[0].length;
  const height = matrix.length;
  let newConnections = 0;
  [-1, 0, 1].forEach((rowAdj) => {
    const thisI = i + rowAdj;
    if (thisI < 0 || thisI >= height) return;
    [-1, 0, 1].forEach((colAdj) => {
      if (rowAdj === 0 && colAdj === 0) return;
      const thisJ = j + colAdj;
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

const checkForNewAdjacencies = (matrix, valueToMatch) => {
  let connectionsMade = 0;
  matrix.forEach((row, i) => {
    row.forEach((_, j) => {
      if (!(connectedHere([i, j]))) return;
      connectionsMade += connectAroundTheseCoords(matrix, [i, j], valueToMatch);
    });
  });
  return connectionsMade > 0;
};

const connectedValueCoordinates = () => {
  const result = [];
  connectedValuesArr.forEach((row, i) => {
    row.forEach((_, j) => {
      if (connectedHere([i, j])) result.push([i, j]);
    });
  });
  return result;
};

const connectedValues = (arr, val, coord) => {
  initializeTracking(arr);
  const [row, column] = coord;
  if (arr[row][column] !== val) return [];
  connectedValuesArr[row][column] = CONNECTED;
  let newAdjacenciesFound = true;
  let passes = 0;
  const maxPasses = Math.max(arr.length, arr[0].length);
  while (newAdjacenciesFound && passes <= maxPasses) {
    newAdjacenciesFound = checkForNewAdjacencies(arr, val);
    passes += 1;
  }
  return connectedValueCoordinates();
};

export default connectedValues;
