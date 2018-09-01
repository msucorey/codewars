// Feel free to write and use any additional functions, variables, objects, etc. as you wish

const fullGrid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const pairOfBlockingLetters = (letter) => {
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

/* String, Int ->  Int */
const countPatternsFrom = (firstDot, length, grid = fullGrid) => {
  if (length < 1 || length > 9) return 0;
  if (length === 1) return 1;

  switch (firstDot) {
    case 'A': {
      const restOfGrid = grid.filter(x => x === 'A');
      let options = 0;
      pairOfBlockingLetters('A').forEach((pair) => {
        const [firstLetter, blockedLetter] = pair;
        if (restOfGrid.includes(firstLetter)) {
          options += countPatternsFrom(firstLetter, length - 1, restOfGrid);
        } else if (restOfGrid.includes(blockedLetter)) {
          options += countPatternsFrom(blockedLetter, length - 1, restOfGrid);
        }
      });
      ['F', 'G'].forEach((letter) => {
        if (restOfGrid.includes(letter)) {
          options += countPatternsFrom(letter, length - 1, restOfGrid);
        }
      });
      return options;
    }
    case 'B':
      break;
    case 'C':
      break;
    case 'D':
      break;
    case 'E':
      break;
    case 'F':
      break;
    case 'G':
      break;
    case 'H':
      break;
    case 'I':
      break;
    default:
      return null;
  }
  return null;
};

console.log(countPatternsFrom('A', 0)); // , 0);
console.log(countPatternsFrom('A', 10)); // , 0);
console.log(countPatternsFrom('B', 1)); // , 1);
console.log(countPatternsFrom('C', 2)); // , 5);

console.log(countPatternsFrom('D', 3)); // , 37);
console.log(countPatternsFrom('E', 4)); // , 256);
console.log(countPatternsFrom('E', 8)); // , 23280);
