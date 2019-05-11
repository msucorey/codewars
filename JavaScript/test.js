import { assert } from 'mocha';

import { expand } from './lib/expand';


describe('Basic test cases', () => {
  it('should do the basics', () => {
    const result = expand();

    assert.equal(result, true);
  });
});
