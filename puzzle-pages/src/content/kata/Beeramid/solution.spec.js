import { beeramid } from './solution';
import assert from 'assert';

describe("for given referral bonuses and the price of a single beer", function() {
  it('computes the number of complete levels of the tallest beeramid possible', () => {
    assert.strictEqual(beeramid(9, 2), 1);
    assert.strictEqual(beeramid(10, 2), 2);
    assert.strictEqual(beeramid(11, 2), 2);
    assert.strictEqual(beeramid(21, 1.5), 3);
    assert.strictEqual(beeramid(454, 5), 5);
    assert.strictEqual(beeramid(455, 5), 6);
    assert.strictEqual(beeramid(4, 4), 1);
    assert.strictEqual(beeramid(3, 4), 0);
    assert.strictEqual(beeramid(0, 4), 0);
    assert.strictEqual(beeramid(-1, 4), 0);
  });
});
