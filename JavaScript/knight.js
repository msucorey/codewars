const distanceBetweenSpaces = (firstSpace, secondSpace) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const spacesAreEqual = (firstSpace, secondSpace) => {
  return firstSpace.toString() === secondSpace.toString();
}

const spacesAreAdjacent = (firstSpace, secondSpace) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  return Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1;
}

const isValidMove = move => {
  const [x, y] = move;
  return x >= 0 && y >= 0 && x <= 7 && y <= 7;
}

const possibleKnightMoves = startPos => {
  const possibleMoves = [];
  [[0, 2], [0, -2], [2, 0], [-2, 0]].forEach(firstMove => {
    if (firstMove[0]) {
      possibleMoves.push([firstMove[0], firstMove[1] + 1]).push([firstMove[0], firstMove[1] - 1]);
    } else {
      possibleMoves.push([firstMove[0] + 1, firstMove[1]]).push([firstMove[0] - 1, firstMove[1]]);
    }
  })
  return possibleMoves.filter(isValidMove);
}

const coordConvert = coord => {
  const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  if (coord instanceof String) {
    const [alpha, num] = coord;
    const column = columnLetters.indexOf(alpha);
    const row = num - 1;
    return [column, row];
  }
  const [x, y] = coord;
  return columnLetters[x] + (y + 1);
}

function knight(start, finish) {
  if (start === finish) return 0;
  const startSpace = coordConvert(start);
  const finishSpace = coordConvert(finish);
  if (spacesAreAdjacent(startSpace, finishSpace)) return 2;
  const possibleMoves = possibleKnightMoves(startSpace);
  const distances = possibleMoves.map(space => distanceBetweenSpaces(space, finishSpace));
  const minDistance = distances.sort()[0];
  const minDistIndex = distances.indexOf(minDistance);
  const nextMove = possibleMoves[minDistIndex];
  return 1 + knight(coordConvert(start), finish);
}