"use strict";

var number = function number(busStops) {
  var peopleOnBus = 0;
  busStops.forEach(function (busStop) {
    var peopleGettingOn = busStop[0];
    var peopleGettingOff = busStop[1];
    peopleOnBus += peopleGettingOn;
    peopleOnBus -= peopleGettingOff;
  });
  return peopleOnBus;
};

console.log(number([[10, 0], [3, 5], [5, 8]])); // 5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); // 17
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])); // 21