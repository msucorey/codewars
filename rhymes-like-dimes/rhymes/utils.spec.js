import * as utils from './utils';

describe('quarterOf', () => {
  it('should return the quarter of a number', () => {
    expect(utils.quarterOf(1)).toBe(1);
    expect(utils.quarterOf(2)).toBe(1);
    expect(utils.quarterOf(3)).toBe(1);
    expect(utils.quarterOf(4)).toBe(2);
    expect(utils.quarterOf(5)).toBe(2);
    expect(utils.quarterOf(6)).toBe(2);
    expect(utils.quarterOf(7)).toBe(3);
    expect(utils.quarterOf(8)).toBe(3);
    expect(utils.quarterOf(9)).toBe(3);
    expect(utils.quarterOf(10)).toBe(4);
    expect(utils.quarterOf(11)).toBe(4);
    expect(utils.quarterOf(12)).toBe(4);
  });
});
