/**
 * nexus
 * @param {Object.<string, number>} users - users by rank and honor
 * 
 * @description Find the user who is at the 'nexus' of Codewars.
 * @see https://www.codewars.com/kata/find-the-nexus-of-the-codewars-universe
 * 
 * @return {number} Lowest user rank with minimum honor/rank difference
 */
const nexus = users => {
  const honorRankDifferences = Object.keys(users).map(key => {
    const rank = Number(key);
    const honor = users[key];
    return [rank, Math.abs(rank - honor)];
  });
  const reducer = (acc, val) => Math.min(acc, val[1]);
  const firstUserDiff = honorRankDifferences[0][1];
  const minDiff =  honorRankDifferences.reduce(reducer, firstUserDiff);
  const userRanksWithMinDiff = honorRankDifferences.filter(hrd => hrd[1] === minDiff).map(hrd => hrd[0]);
  return Math.min(...userRanksWithMinDiff);
}

// Test.assertEquals(nexus({"1":3,"3":3,"5":3}),3);
console.log(nexus({"1":3,"3":3,"5":3}));
