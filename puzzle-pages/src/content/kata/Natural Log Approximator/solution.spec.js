import { ln } from './solution';
import assert from 'assert';

function withinRange(number, target, range) {
  if (Math.abs(number - target) <= range) {
    return true;
  }
  return false;
}

describe("Should return NaN for inputs 0 and below", function() {
  assert.strictEqual(isNaN(ln(-10)), true, "The natural log of -10 is NaN.");
  assert.strictEqual(isNaN(ln(0)), true, "The natural log of 0 is NaN.");
});
describe("Basic tests", function() {
  assert.strictEqual(withinRange(ln(1), 0, 1E-10), true, "The natural log of 1 is 0.");
  assert.strictEqual(withinRange(ln(2.71828), 0.9999993273, 1E-10), true, "The natural log of 2.71828 is 0.99999932...");
  assert.strictEqual(withinRange(ln(10), 2.3025850929, 1E-10), true, "The natural log of 10 is 2.30258509...");
});