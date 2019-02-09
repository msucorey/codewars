const solution = (numbers) => {
  let transformationMadeOnLastPass = true;
  let transformationMadeOnThisPass = false;
  const numbersCopy = [...numbers];
  let index = 0;
  while (transformationMadeOnLastPass) {
    const [prev, curr, next] =
      [numbersCopy[index - 1], numbersCopy[index], numbersCopy[index + 1]];
    if (curr > prev) {
      numbersCopy[index] -= prev;
      transformationMadeOnThisPass = true;
    } else if (curr > next) {
      numbersCopy[index] -= next;
      transformationMadeOnThisPass = true;
    }
    index += 1;
    if (index === numbers.length) {
      index = 0;
      transformationMadeOnLastPass = transformationMadeOnThisPass;
      transformationMadeOnThisPass = false;
    }
  }
  return numbersCopy.reduce((x, y) => x + y);
};

module.exports = solution;
