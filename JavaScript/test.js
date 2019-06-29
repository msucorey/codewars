import assert from 'assert';

import connectedValues from './connectedValues';

describe('connectedValues()', () => {
  const arr1 = [
    [0, 0, 0, 1, 3, 4, 0, 3],
    [0, 2, 0, 0, 2, 0, 0, 5],
    [0, 0, 0, 2, 0, 1, 1, 1],
    [2, 3, 4, 1, 3, 1, 0, 0],
    [0, 1, 5, 1, 6, 0, 2, 0],
    [2, 0, 2, 3, 1, 1, 1, 1],
    [2, 0, 2, 3, 1, 1, 1, 1]];

  it('Should return [] when arr at coord != val', () => {
    assert(connectedValues(arr1, 0, [4, 2]), []);
  });
  it('Should return the correct array of coordinates with length == 1', () => {
    assert(connectedValues(arr1, 2, [1, 1]), [[1, 1]]);
  });
  it('Should return the correct array of coordinates with length > 1', () => {
    const ans1 = [[0, 0], [0, 1], [0, 2], [0, 6], [1, 0],
      [1, 2], [1, 3], [1, 5], [1, 6], [2, 0],
      [2, 1], [2, 2], [2, 4]];
    assert(connectedValues(arr1, 0, [0, 0]).sort(), ans1);
  });
});
