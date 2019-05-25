import assert from 'assert';

import { passHash } from './passHash';

const tests = [
  ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
  ['abc123', 'e99a18c428cb38d5f260853678922e03'],
];

describe('passHash function', () => {
  it('should pass basic test cases', () => {
    for (let i = 0; i < tests.length; i += 1) {
      assert(passHash(tests[i][0]), tests[i][1]);
    }
  });
});
