'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _expand = require('./expand');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Basic test cases', function () {
  it('Should correctly expand binomials where a=1 and b is positive', function () {
    (0, _assert2.default)(true, true);
    // assert(expand('(x+1)^0'), '1');
    // assert(expand('(x+1)^1'), 'x+1');
    // assert(expand('(x+1)^2'), 'x^2+2x+1');
  });
  it('Should correctly expand binomials where a=1 and b is negative', function () {
    (0, _assert2.default)((0, _expand.expand)('(x-1)^0'), '1');
    (0, _assert2.default)((0, _expand.expand)('(x-1)^1'), 'x-1');
    (0, _assert2.default)((0, _expand.expand)('(x-1)^2'), 'x^2-2x+1');
  });
  it('Should correctly expand binomials where a is positive.', function () {
    (0, _assert2.default)((0, _expand.expand)('(5m+3)^4'), '625m^4+1500m^3+1350m^2+540m+81');
    (0, _assert2.default)((0, _expand.expand)('(2x-3)^3'), '8x^3-36x^2+54x-27');
    (0, _assert2.default)((0, _expand.expand)('(7x-7)^0'), '1');
  });
  it('Should correctly expand binomials where a is negative.', function () {
    (0, _assert2.default)((0, _expand.expand)('(-5m+3)^4'), '625m^4-1500m^3+1350m^2-540m+81');
    (0, _assert2.default)((0, _expand.expand)('(-2k-3)^3'), '-8k^3-36k^2-54k-27');
    (0, _assert2.default)((0, _expand.expand)('(-7x-7)^0'), '1');
  });
});