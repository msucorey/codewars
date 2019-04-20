const assert = require('assert');
const Containers = require('./containers');

describe('Basic test cases', () => {
  assert.equal(Containers('A'), 1);
  assert.equal(Containers('CBACBACBACBACBA'), 3);
  assert.equal(Containers('CCCCBBBBAAAA'), 1);
  assert.equal(Containers('CODEWARS'), 5);
});
