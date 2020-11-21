import { solution } from './solution';
import assert from 'assert';

describe('basic tests', () => {
  it('should return expected values', () => {
    assert.strictEqual(solution(10), 23);
    assert.strictEqual(solution(20), 78);
    assert.strictEqual(solution(200), 9168);
  });
});

describe('smallest cases', () => {
  it('should return expected values', () => {
    [[-1, 0], [0, 0], [1, 0]].map(([input, expected]) => {
      assert.strictEqual(solution(input), expected);
    });
  });
});
