// Feel free to write and use any additional functions, variables, objects, etc. as you wish

const fullGrid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

/* String, Int ->  Int */
const countPatternsFrom = (firstDot, length, grid = fullGrid) => {
  if (length < 1 || length > 9) return 0;
  if (length === 1) return 1;

  switch (firstDot) {
    case 'A':
      break;
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
      break;
  }
};

console.log(countPatternsFrom('A', 0)); // , 0);
console.log(countPatternsFrom('A', 10)); // , 0);
console.log(countPatternsFrom('B', 1)); // , 1);
console.log(countPatternsFrom('C', 2)); // , 5);

console.log(countPatternsFrom('D', 3)); // , 37);
console.log(countPatternsFrom('E', 4)); // , 256);
console.log(countPatternsFrom('E', 8)); // , 23280);