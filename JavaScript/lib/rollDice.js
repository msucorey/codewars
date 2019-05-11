'use strict';

// class Rational {
//   constructor(n, m) { this.num = n; this.den = m; }
//   valueOf() { return this.num / this.den; }
//   toString() { return `${this.num}/${this.den}`; }
// }

var rollDice = function rollDice(rolls, sides, threshold) {
  if (rolls * sides < threshold) return 0;
  var numCombinations = Math.pow(sides, rolls);
  var numCombosExceedingThreshold = 0;
  for (var x = 0; x < numCombinations; x += 1) {
    var dieFaceTotals = x.toString(sides).length ? x.toString(sides).split('').reduce(function (a, b) {
      return parseInt(a, sides) + parseInt(b, sides);
    }, 0) + rolls : x + rolls;
    console.log(dieFaceTotals);
    if (dieFaceTotals >= threshold) numCombosExceedingThreshold += 1;
  }
  return numCombosExceedingThreshold / numCombinations;
};

module.exports = rollDice;