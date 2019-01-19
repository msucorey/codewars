const distanceBetweenSpaces = (firstSpace, secondSpace) => {
  const [x1, y1] = firstSpace;
  const [x2, y2] = secondSpace;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const spacesAreEqual = (firstSpace, secondSpace) => {
  return firstSpace.toString() === secondSpace.toString();
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

const coordConvert = alphaNum => {
  const [alpha, num] = alphaNum;
  const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(alpha);
  const row = num - 1;
  return [column, row];
}

function knight(start, finish) {
  // Ha-ha, it's not "knight", it's a horse :D

}