import crypto from 'crypto';

/**
 * passHash
 * @param {string} password - password to hash
 *
 * @description Hashes password using deprecated MD5 algorithm.
 * @see https://www.codewars.com/kata/password-hashes
 *
 * @return {string} Lowest user rank with minimum honor/rank difference
 */
const passHash = (password) => {
  const hash = crypto.createHash('md5');
  hash.update(password);
  return hash.digest('hex');
};

export { passHash as default, passHash };
