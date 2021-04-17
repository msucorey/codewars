import { balancedParens } from './solution';
import assert from 'assert';

describe("for given referral bonuses and the price of a single beer", function() {
  it('computes the number of complete levels of the tallest beeramid possible', () => {
        assert.strictEqual( balancedParens(0).sort(), [""] );
        assert.strictEqual( balancedParens(1).sort(), ["()"] );
        assert.strictEqual( balancedParens(2).sort(), ["(())","()()"] );
        assert.strictEqual( balancedParens(3).sort(), ["((()))","(()())","(())()","()(())","()()()"] );
        assert.strictEqual( balancedParens(4).sort(), ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] );
  });
});

// describe("All Balanced Parentheses",()=>{
//   it("Example Tests",()=>{
//     Test.assertDeepEquals( balancedParens(0).sort(), [""] );
//     Test.assertDeepEquals( balancedParens(1).sort(), ["()"] );
//     Test.assertDeepEquals( balancedParens(2).sort(), ["(())","()()"] );
//     Test.assertDeepEquals( balancedParens(3).sort(), ["((()))","(()())","(())()","()(())","()()()"] );
//     Test.assertDeepEquals( balancedParens(4).sort(), ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] );
//   });
// });