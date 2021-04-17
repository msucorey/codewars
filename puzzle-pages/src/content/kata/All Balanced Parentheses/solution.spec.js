import { balancedParens } from './solution';
import assert from 'assert';

describe("for different values of n", function() {
  it('computes correct output', () => {
        assert.deepStrictEqual( balancedParens(0).sort(), [""] );
        assert.deepStrictEqual( balancedParens(1).sort(), ["()"] );
        assert.deepStrictEqual( balancedParens(2).sort(), ["(())","()()"] );
        assert.deepStrictEqual( balancedParens(3).sort(), ["((()))","(()())","(())()","()(())","()()()"] );
        assert.deepStrictEqual( balancedParens(4).sort(), ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] );
  });
});
