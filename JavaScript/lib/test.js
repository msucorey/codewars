'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _findNum = require('./findNum');

var _findNum2 = _interopRequireDefault(_findNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Basic test cases', function () {
  it('Should compute correct value for 1', function () {
    (0, _assert2.default)((0, _findNum2.default)(1), 1);
  });
  it('Should compute correct value for 5', function () {
    (0, _assert2.default)((0, _findNum2.default)(5), 5);
  });
  it('Should compute correct value for 22', function () {
    (0, _assert2.default)((0, _findNum2.default)(11), 22);
  });
  it('Should compute correct value for 103', function () {
    (0, _assert2.default)((0, _findNum2.default)(100), 103);
  });
  // it('Should compute correct value for 476', () => {
  //   assert(findNum(500), 476);
  // });
});