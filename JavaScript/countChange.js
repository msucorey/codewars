var countChangeLogic = function(money, coinArray) {
  if (money === 0) { return [[]]; }
  if (coinArray.length === 0) { return []; }
  if (coinArray.length === 1) {
    if (coinArray[0] > money) { return []; }
    if (coinArray[0] === money) { return [[money]]; }
    if (money % coinArray[0] !== 0) {
      return [];
    } else {
      return [new Array(money / coinArray[0]).fill(coinArray[0])];
    }
  }
  let result = [];
  const coins = coinArray.sort().reverse();
  for (let i = 0; i < coins.length; i++) {
    let thisCoin = coins[i];
    if (money >= thisCoin) {
      countChangeLogic(money - thisCoin, coins.slice(i)).forEach(subResult => {
        result.push([thisCoin].concat(subResult));
      });
    }
  }
  return result;
};

var countChange = function(money, coinArray) {
  return countChangeLogic(money, coinArray).length;
};

console.log(countChange(4, [1,2]));
// , 3, 'Simple case')
console.log(countChange(10, [5,2,3]));
// , 4, 'Another simple case')
console.log(countChange(11, [5,7]));
// , 0, 'No change')
