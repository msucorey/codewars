import { solution } from './solution';
import assert from 'assert';

describe('basic tests', () => {
  it('should return expected values', () => {
    assert.strictEqual(solution(10), 23);
    assert.strictEqual(solution(20), 78);
    assert.strictEqual(solution(200), 9168);
  });
});

describe('for non-natural numbers', () => {
  it('should throw', () => {
    assert.throws(() => solution(0));
    assert.throws(() => solution('a'));
    assert.throws(() => solution(0.5));
  });
});
