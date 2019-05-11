"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * nexus
 * @param {Object.<string, number>} users - users by rank and honor
 * 
 * @description Find the user who is at the 'nexus' of Codewars.
 * @see https://www.codewars.com/kata/find-the-nexus-of-the-codewars-universe
 * 
 * @return {number} Lowest user rank with minimum honor/rank difference
 */
var nexus = function nexus(users) {
  var honorRankDifferences = Object.keys(users).map(function (key) {
    var rank = Number(key);
    var honor = users[key];
    return [rank, Math.abs(rank - honor)];
  });
  var reducer = function reducer(acc, val) {
    return Math.min(acc, val[1]);
  };
  var firstUserDiff = honorRankDifferences[0][1];
  var minDiff = honorRankDifferences.reduce(reducer, firstUserDiff);
  var userRanksWithMinDiff = honorRankDifferences.filter(function (hrd) {
    return hrd[1] === minDiff;
  }).map(function (hrd) {
    return hrd[0];
  });
  return Math.min.apply(Math, _toConsumableArray(userRanksWithMinDiff));
};

// Test.assertEquals(nexus({"1":3,"3":3,"5":3}),3);
console.log(nexus({ "1": 3, "3": 3, "5": 3 }));