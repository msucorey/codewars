/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  const sides = [a, b, c].sort((first, second) => first - second);
  console.log(sides);
  const a2b2 = Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
  const c2 = Math.pow(sides[2], 2);
  if (sides[0] + sides[1] <= sides[2]) {
    return 0;
  }
  if (a2b2 > c2) {
    return 1;
  } else if (a2b2 === c2) {
    return 2;
  } else {
    return 3;
  }
}

triangleType(7,3,2);
// 0 // Not triangle
triangleType(2,4,6);
// 0 // Not triangle
triangleType(8,5,7);
// 1 // Acute
triangleType(3,4,5);
// 2 // Right
triangleType(7,12,8);
// 3 // Obtuse
