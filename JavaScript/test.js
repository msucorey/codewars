const assert = require('assert');
const rollDice = require('./rollDice');

class Rational {
  constructor(n, m) { this.num = n; this.den = m; }
  valueOf() { return this.num / this.den; }
  toString() { return `${this.num}/${this.den}`; }
}
describe('Basic test cases', () => {
  [[1, 6, 4, new Rational(3, 6)],
    [1, 20, 20, new Rational(1, 20)],
    [2, 4, 2, 1],
    [2, 4, 9, 0],
    [2, 6, 3, new Rational(35, 36)],
  ].forEach(([rolls, sides, threshold, expected]) => {
    it(`P(${rolls}d${sides} >= ${threshold}) = ${String(expected)}`, () => {
      const actual = rollDice(rolls, sides, threshold);
      console.log(actual);
      assert.equal(Math.abs(actual - expected) < 1e-4, true);
    });
  });
});
