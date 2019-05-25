'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passHash = exports.default = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * passHash
 * @param {string} password - password to hash
 *
 * @description Hashes password using deprecated MD5 algorithm.
 * @see https://www.codewars.com/kata/password-hashes
 *
 * @return {string} Lowest user rank with minimum honor/rank difference
 */
var passHash = function passHash(password) {
  var hash = _crypto2.default.createHash('md5');
  hash.update(password);
  return hash.digest('hex');
};

exports.default = passHash;
exports.passHash = passHash;