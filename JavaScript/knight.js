const coordConvert = alphaNum => {
  const [alpha, num] = alphaNum;
  const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(alpha);
  const row = num - 1;
  return [column, row];
}

function knight(start, finish) {
  // Ha-ha, it's not "knight", it's a horse :D

}