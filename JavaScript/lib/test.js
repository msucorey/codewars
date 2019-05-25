'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _passHash = require('./passHash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tests = [['password', '5f4dcc3b5aa765d61d8327deb882cf99'], ['abc123', 'e99a18c428cb38d5f260853678922e03']];

describe('passHash function', function () {
  it('should pass basic test cases', function () {
    for (var i = 0; i < tests.length; i += 1) {
      (0, _assert2.default)((0, _passHash.passHash)(tests[i][0]), tests[i][1]);
    }
  });
});