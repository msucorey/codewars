function sumDigPow(a, b) {
  let result = [];
  for (let n = a; n <= b; n++) {
    let numStr = n.toString();
    let power = numStr.length;
    let sum = 0;
    for (let p = 1; p <= power; p++) {
      sum += Math.pow(parseInt(numStr[p - 1]), p);
    }
    if (sum === n) {
      result.push(n);
    }
  }
  return result;
}

console.log(sumDigPow(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100));
// [89]
console.log(sumDigPow(90, 100));
// []
console.log(sumDigPow(90, 150));
// [135]
console.log(sumDigPow(50, 150));
// [89, 135]
console.log(sumDigPow(10, 150));
// [89, 135]
