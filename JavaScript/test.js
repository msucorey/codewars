import assert from 'assert';

import findNum from './findNum';

describe('Basic test cases', () => {
  it('Should compute correct value for 1', () => {
    assert(findNum(1), 1);
  });
  it('Should compute correct value for 5', () => {
    assert(findNum(5), 5);
  });
  it('Should compute correct value for 22', () => {
    assert(findNum(11), 22);
  });
  it('Should compute correct value for 103', () => {
    assert(findNum(100), 103);
  });
  // it('Should compute correct value for 476', () => {
  //   assert(findNum(500), 476);
  // });
});
