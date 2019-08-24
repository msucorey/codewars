import assert from 'assert';

import simplify from './simplifyEqualities';

describe('simplify()', () => {
  it("should do that thing it does when it's doing that thing", () => {
    assert(simplify(['a + a = b', 'b - d = c', 'a + b = d'], 'c + a + b'), '2a');
    assert(simplify(['a + 3g = k', '-70a = g'], '-k + a'), '210a');
    assert(simplify(['-j -j -j + j = b'], '-j - b'), '1j');
    assert(simplify(['(-3f + q) + r = l', '4f + q = r', '-10f = q'], '20l + 20(q - 200f)'), '-4580f');
    assert(simplify(['-(-(-(-(-(g))))) - l  = h', '8l = g'], 'h - l - g'), '-18l');
    assert(simplify(['x = b', 'b = c', 'c = d', 'd = e'], 'c'), '1x');
    assert(simplify(['y + 6Y - k - 6 K = f', ' F + k + Y - y = K', 'Y = k', 'y = Y', 'y + Y = F'], 'k - f + y'), '14y');
  });
});
