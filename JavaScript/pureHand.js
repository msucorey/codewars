// https://www.codewars.com/kata/mahjong-number-1-pure-hand

const NUM_DIFFERENT_TILES = 9;

const TILES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const SEQUENCES = ['123', '234', '345', '456', '567', '678', '789'];

const isWinningHand = (hand) => {
  const tileCounts = new Array(NUM_DIFFERENT_TILES).fill(0);
  TILES.forEach((tile) => {
    tileCounts[tile - 1] = hand.split('').filter(char => char === tile).length;
  });

  console.log('tile counts before');
  console.log('tileCounts', tileCounts);
  let foundAtLeastOneSequence = true;
  while (foundAtLeastOneSequence) {
    foundAtLeastOneSequence = false;
    // eslint-disable-next-line no-loop-func
    SEQUENCES.forEach((sequence) => {
      const [firstTile, secondTile, thirdTile] = sequence.split('');
      if (tileCounts[firstTile - 1] && tileCounts[secondTile - 1] && tileCounts[thirdTile - 1]) {
        tileCounts[firstTile - 1] -= 1;
        tileCounts[secondTile - 1] -= 1;
        tileCounts[thirdTile - 1] -= 1;
        foundAtLeastOneSequence = true;
      }
    });
  }

  console.log('tile counts after');
  console.log('tileCounts', tileCounts);
  return tileCounts.every(tileCount => [0, 2, 3].includes(tileCount));
};

const solution = (tiles) => {
  let winningTiles = '';

  TILES.forEach((tile) => {
    if (isWinningHand(tiles + tile)) winningTiles += tile;
  });

  console.log('winningTiles', winningTiles);
  return winningTiles;
};

const pureHand = solution;

export default pureHand;
