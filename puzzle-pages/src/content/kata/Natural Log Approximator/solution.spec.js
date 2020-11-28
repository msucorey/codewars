import { ln, withinRange, MIN_ACCURACY } from './solution';
import assert from 'assert';

describe("for inputs 0 and below", function() {
  it('should return NaN', () => {
    assert.strictEqual(isNaN(ln(-10)), true, "The natural log of -10 is NaN.");
    assert.strictEqual(isNaN(ln(0)), true, "The natural log of 0 is NaN.");
  });
});
describe("Basic tests", function() {
  it('should do that thing it does when it does that thing', () => {
    assert.strictEqual(withinRange(ln(1), 0, MIN_ACCURACY), true, "The natural log of 1 is 0.");
    assert.strictEqual(withinRange(ln(2.71828), 0.9999993273, MIN_ACCURACY), true, "The natural log of 2.71828 is 0.99999932...");
    assert.strictEqual(withinRange(ln(10), 2.3025850929, MIN_ACCURACY), true, "The natural log of 10 is 2.30258509...");
  });
});
