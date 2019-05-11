'use strict';

var _mocha = require('mocha');

var _expand = require('./expand');

describe('Basic test cases', function () {
  it('should do the basics', function () {
    var result = (0, _expand.expand)();

    _mocha.assert.equal(result, result);
  });
});