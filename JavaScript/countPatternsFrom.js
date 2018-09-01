const fullGrid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const pairsOfBlockingLetters = (letter) => {
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

const flatPairs = (pairs) => {
  const result = [];
  pairs.forEach((pair) => {
    result.push(pair[0]);
    result.push(pair[1]);
  });
  return result;
};

const otherLetters = (letter) => {
  const thisAndBlockers = flatPairs(pairsOfBlockingLetters(letter)).concat([letter]);
  return fullGrid.filter(x => !thisAndBlockers.includes(x));
};

const countPatternsFrom = (firstDot, length, grid = fullGrid) => {
  if (length < 1 || length > 9) return 0;
  if (length === 1) return 1;

  const restOfGrid = grid.filter(x => x !== firstDot);
  let options = 0;

  pairsOfBlockingLetters(firstDot).forEach((pair) => {
    const [firstLetter, blockedLetter] = pair;
    if (restOfGrid.includes(firstLetter)) {
      options += countPatternsFrom(firstLetter, length - 1, restOfGrid);
    } else if (restOfGrid.includes(blockedLetter)) {
      options += countPatternsFrom(blockedLetter, length - 1, restOfGrid);
    }
  });

  otherLetters(firstDot).forEach((letter) => {
    if (restOfGrid.includes(letter)) {
      options += countPatternsFrom(letter, length - 1, restOfGrid);
    }
  });
  return options;
};

