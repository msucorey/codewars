const assert = require('assert');
const checkPipe = require('./checkPipe');

let pipe;

describe('Basic test cases', () => {
  it('should do the basics', () => {
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

    pipe = ['...┏',
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
});
