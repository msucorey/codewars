function convertFrac(lst) {
  let denoms = lst.map(el => el[1]);
  denoms = denoms.sort((a, b) => b - a);
  let lcd = 1;
  let result = "";
  for (let idx in denoms) {
    let thisDenom = denoms[idx];
    if (lcd % thisDenom > 0 ) {
      lcd *= thisDenom;
    }
  }
  for (let idx in lst) {
    let thisMultiplier = lcd / lst[idx][1];
    result = result.concat("(").concat(lst[idx][0] * thisMultiplier).concat(",").concat(lcd).concat(")");
  }
  return result;
}

const lst = [ [1, 2], [1, 3], [1, 4] ];
convertFrac(lst);
// "(6,12)(4,12)(3,12)"
