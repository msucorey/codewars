import assert from 'assert';

import pureHand from './pureHand';

describe('pureHand()', () => {
  const cases = [
    ['1113335557779', '89'],
    ['1223334455678', '258'],
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const [hand, expected] of cases) {
    it('hand should be expected', () => {
      assert(pureHand(hand), expected);
    });
  }
});
