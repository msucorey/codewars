const assert = require('assert');
const checkPipe = require('./checkPipe');

let pipe;

describe('Basic test cases', () => {
  pipe = ['╋━━┓',
    '┃..┃',
    '┛..┣'];
  assert.equal(checkPipe(pipe), true);

  pipe = ['...┏',
    '┃..┃',
    '┛..┣'];
  assert.equal(checkPipe(pipe), false);

  pipe = ['...┏',
    '...┃',
    '┛..┣'];
  assert.equal(checkPipe(pipe), false);

  pipe = [ '...┏',
    '...┃',
    '┓..┣'];
  assert.equal(checkPipe(pipe), true);

  pipe = ['╋',
    '╋',
    '╋'];
  assert.equal(checkPipe(pipe), true);

  pipe = ['╋....',
    '┃..┛.',
    '┃....'];
  assert.equal(checkPipe(pipe), false);

  pipe = ['....',
    '.┛┛.',
    '....'];
  assert.equal(checkPipe(pipe), true);
});
