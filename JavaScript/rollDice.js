// class Rational {
//   constructor(n, m) { this.num = n; this.den = m; }
//   valueOf() { return this.num / this.den; }
//   toString() { return `${this.num}/${this.den}`; }
// }

const rollDice = (rolls, sides, threshold) => {
  if (rolls * sides < threshold) return 0;
  const numCombinations = Math.pow(sides, rolls);
  let numCombosExceedingThreshold = 0;
  for (let x = 0; x < numCombinations; x += 1) {
    const dieFaceTotals = x.toString(sides).length
      ? x.toString(sides).split('')
        .reduce((a, b) => parseInt(a, sides) + parseInt(b, sides), 0) + rolls
      : x + rolls;
    console.log(dieFaceTotals);
    if (dieFaceTotals >= threshold) numCombosExceedingThreshold += 1;
  }
  return numCombosExceedingThreshold / numCombinations;
};

module.exports = rollDice;
