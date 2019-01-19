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
  const xDiff = Math.abs(x1 - x2);
  const yDiff = Math.abs(y1 - y2);
  return xDiff + yDiff === 1;
}

const spacesAreCornering = (firstSpace, secondSpace) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  const xDiff = Math.abs(x1 - x2);
  const yDiff = Math.abs(y1 - y2);
  return xDiff === 1 && yDiff === 1;
}

const spacesOut = (firstSpace, secondSpace, number) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  const xDiff = Math.abs(x1 - x2);
  const yDiff = Math.abs(y1 - y2);
  return (xDiff === number  && !yDiff) ^ (yDiff === number && !xDiff);
}

const longLeg = (firstSpace, secondSpace) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  const xDiff = Math.abs(x1 - x2);
  const yDiff = Math.abs(y1 - y2);
  return (xDiff === 1 && yDiff === 3) || (xDiff === 3 && yDiff === 1);
}

const isValidMove = move => {
  const [x, y] = move;
  return x >= 0 && y >= 0 && x <= 7 && y <= 7;
}

const possibleKnightMoves = startPos => {
  const possibleMoves = [];
  [[0, 2], [0, -2], [2, 0], [-2, 0]].forEach(firstMove => {
    if (firstMove[0]) {
      possibleMoves.push([firstMove[0], firstMove[1] + 1]);
      possibleMoves.push([firstMove[0], firstMove[1] - 1]);
    } else {
      possibleMoves.push([firstMove[0] + 1, firstMove[1]]);
      possibleMoves.push([firstMove[0] - 1, firstMove[1]]);
    }
  });
  // console.log('so far possible moves are ' + possibleMoves);
  return possibleMoves.map(move => [move[0] + startPos[0], move[1] + startPos[1]]).filter(isValidMove);
}

const coordConvert = coord => {
  const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  if (typeof coord === 'string') {
    const [alpha, num] = coord;
    const column = columnLetters.indexOf(alpha);
    const row = num - 1;
    return [column, row];
  }
  // console.log('coord is' + coord);
  const [x, y] = coord;
  return columnLetters[x] + (y + 1);
}

function knight(start, finish) {
  if (start === finish) return 0;
  const startSpace = coordConvert(start);
  // console.log('startspace is ' + startSpace);
  const finishSpace = coordConvert(finish);
  // console.log('finishspace is ' + finishSpace);
  if (spacesAreAdjacent(startSpace, finishSpace)) return 2;
  if (spacesOut(startSpace, finishSpace, 2)) return 2;
  if (longLeg(startSpace, finishSpace)) return 2;
  if (spacesAreCornering(startSpace, finishSpace)) return 3;
  if (spacesOut(startSpace, finishSpace, 5)) return 3;
  const possibleMoves = possibleKnightMoves(startSpace);
  if (possibleMoves.includes(finishSpace)) return 1;
  // console.log('possible moves are ' + possibleMoves);
  const distances = possibleMoves.map(space => distanceBetweenSpaces(space, finishSpace));
  // console.log('distances are ' + distances);
  const minDistance = [...distances].sort((a, b) => a - b)[0];
  // console.log('min distance is ' + minDistance);
  const minDistIndex = distances.indexOf(minDistance);
  const nextMove = possibleMoves[minDistIndex];
  // console.log('next move is ' + coordConvert(nextMove));
  return 1 + knight(coordConvert(nextMove), finish);
}

console.log(knight('a1', 'c1'));
console.log(knight('a1', 'f1'));
console.log(knight('a1', 'f3'));
console.log(knight('a1', 'f4'));
console.log(knight('a1', 'f7'));