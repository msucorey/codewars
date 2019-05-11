"use strict";

var cache = {};

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return cache[n];
}

console.log(fibonacci(70));
// 190392490709135
fibonacci(60);
// 1548008755920
fibonacci(50);
// 12586269025