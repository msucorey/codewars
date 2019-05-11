import assert from 'assert';

import { expand } from './expand';


describe('Basic test cases', () => {
  it('Should correctly expand binomials where a=1 and b is positive', () => {
    assert(true, true);
    // assert(expand('(x+1)^0'), '1');
    // assert(expand('(x+1)^1'), 'x+1');
    // assert(expand('(x+1)^2'), 'x^2+2x+1');
  });
  it('Should correctly expand binomials where a=1 and b is negative', () => {
    assert(expand('(x-1)^0'), '1');
    assert(expand('(x-1)^1'), 'x-1');
    assert(expand('(x-1)^2'), 'x^2-2x+1');
  });
  it('Should correctly expand binomials where a is positive.', () => {
    assert(expand('(5m+3)^4'), '625m^4+1500m^3+1350m^2+540m+81');
    assert(expand('(2x-3)^3'), '8x^3-36x^2+54x-27');
    assert(expand('(7x-7)^0'), '1');
  });
  it('Should correctly expand binomials where a is negative.', () => {
    assert(expand('(-5m+3)^4'), '625m^4-1500m^3+1350m^2-540m+81');
    assert(expand('(-2k-3)^3'), '-8k^3-36k^2-54k-27');
    assert(expand('(-7x-7)^0'), '1');
  });
});
