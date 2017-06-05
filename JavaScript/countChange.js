var countChange = function(money, coinArray) {
  // your implementation here
  if (money === 0) { return; }
  if (coinArray.size === 1) {
    if (coinArray[0] > money) { return []; }
    if (coinArray[0] === money) { return [money]; }
    if (money % coinArray[0] !== 0) { return []; }
  }
  let result = [];
  const coins = coinArray.sort().reverse();
  for (let i = 0; i < coins.length; i++) {
    let thisChange = money + 0;
    let thisResult = [];
    let j = i + 0;
    while (j < coins.length) {
      if (thisChange >= coins[j]) {
        thisResult.push(coins[j]);
        thisChange = thisChange - coins[j];
      } else {
        j++;
      }
    }
    result.push(thisResult);
  }
  console.log(result);
};

countChange(4, [1,2]);
// , 3, 'Simple case')
countChange(10, [5,2,3]);
// , 4, 'Another simple case')
countChange(11, [5,7]);
// , 0, 'No change')
