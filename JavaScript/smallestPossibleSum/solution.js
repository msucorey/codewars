const solution = (numbers) => {
  let transformationMade = false;
  let nextNumbers = numbers.sort((x, y) => x - y);
  nextNumbers = nextNumbers.map((number, index) => {
    if (number > nextNumbers[index - 1]) {
      transformationMade = true;
      return number - nextNumbers[index - 1];
    }
    return number;
  });
  console.log('next numbers is now');
  console.log(nextNumbers);
  if (transformationMade) {
    return solution(nextNumbers);
  }
  return nextNumbers.reduce((x, y) => x + y);
};

module.exports = solution;
