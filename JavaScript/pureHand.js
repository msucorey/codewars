// https://www.codewars.com/kata/mahjong-number-1-pure-hand

const NUM_DIFFERENT_TILES = 9;

const TILES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const SEQUENCES = ['123', '234', '345', '456', '567', '678', '789'];

// const TRIOS = ['111', '222', '333', '444', '555', '666', '777', '888', '999'];

const isWinningHand = (hand) => {
  const tileCounts = new Array(NUM_DIFFERENT_TILES).fill(0);
  TILES.forEach((tile) => {
    tileCounts[tile - 1] = hand.split('').filter(char => char === tile).length;
  });

  console.log('first subtract lone clusters', tileCounts);
  SEQUENCES.forEach((sequence) => {
    const [first, second, third] = sequence.split('');
    const [firstCount, secondCount, thirdCount] = [tileCounts[first - 1], tileCounts[second - 1], tileCounts[third - 1]];
    if (firstCount === 1 && secondCount === 1 && thirdCount === 1) {
      tileCounts[first - 1] -= 1;
      tileCounts[second - 1] -= 1;
      tileCounts[third - 1] -= 1;
      console.log(`slice off ${sequence}`);
    }
  });

  console.log('let us get rid of singletons now');
  let foundAtLeastOneSequence = true;
  while (foundAtLeastOneSequence) {
    foundAtLeastOneSequence = false;
    // eslint-disable-next-line no-loop-func
    TILES.forEach((tile) => {
      SEQUENCES.forEach((sequence) => {
        const [first, second, third] = sequence.split('');
        const [firstCount, secondCount, thirdCount] = [tileCounts[first - 1], tileCounts[second - 1], tileCounts[third - 1]];
        const trioExists = firstCount && secondCount && thirdCount;
        const trioHasSingleton = [firstCount, secondCount, thirdCount].includes(1);
        if (sequence.includes(tile) && trioExists && trioHasSingleton) {
          tileCounts[first - 1] -= 1;
          tileCounts[second - 1] -= 1;
          tileCounts[third - 1] -= 1;
          console.log(`slice off ${sequence}`);
          foundAtLeastOneSequence = true;
        }
      });
    });
  }

  // console.log('let us subtract trios first');
  // TILES.forEach((tile) => {
  //   if (tileCounts[tile - 1] > 2) tileCounts[tile - 1] = 0;
  // });

  console.log('tile counts before');
  console.log('tileCounts', tileCounts);

  SEQUENCES.forEach((sequence) => {
    foundAtLeastOneSequence = true;
    console.log(`testing sequence ${sequence}`);
    while (foundAtLeastOneSequence) {
      foundAtLeastOneSequence = false;
      const [firstTile, secondTile, thirdTile] = sequence.split('');
      const [firstCount, secondCount, thirdCount] = [tileCounts[firstTile - 1], tileCounts[secondTile - 1], tileCounts[thirdTile - 1]];
      if (firstCount && secondCount && thirdCount && [firstCount, secondCount, thirdCount].filter(x => x === 2).length !== 1) {
        tileCounts[firstTile - 1] -= 1;
        tileCounts[secondTile - 1] -= 1;
        tileCounts[thirdTile - 1] -= 1;
        console.log(`slice off ${sequence}`);
        foundAtLeastOneSequence = true;
      }
    }
  });

  console.log('tile counts after');
  console.log('tileCounts', tileCounts);
  return tileCounts.every(tileCount => [0, 2, 3].includes(tileCount));
};

const solution = (tiles) => {
  let winningTiles = '';

  TILES.forEach((tile) => {
    console.log(`trying ${tile}`);
    if (isWinningHand(tiles + tile)) winningTiles += tile;
  });

  console.log('winningTiles', winningTiles);
  return winningTiles;
};

const pureHand = solution;

export default pureHand;
