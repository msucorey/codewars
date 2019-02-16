const assert = require('assert');
const determinant = require('./determinant');

describe('Example test', () => {
  const m1 = [[1, 3], [2, 5]];
  const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];
  it('does the thing', () => {
    assert.equal(determinant([[1]]), 1);
  });
  it('does the thing', () => {
    assert.equal(determinant(m1), -1);
  });
  it('does the thing', () => {
    assert.equal(determinant(m2), -20);
  });
});
