// Create a function that can approximate the natural log of any positive number to 10 decimal places. Return NaN for invalid inputs.

// @see https://www.codewars.com/kata/59a5a436589d2a3e59000036

const MIN_ACCURACY = 1E-10;

const withinRange = (number, target, range) => Math.abs(number - target) <= range;

const ln = (x: any) => {
  // base cases
  if (x <= 0) return NaN;
  if (x === 1) return 0;

  // Euler's number
  const e = 2.71828182845904523536028747135266249775724709369995;

  let lowerLimit = MIN_ACCURACY;
  let upperLimit = 50; // roughly ln(1E20)

  while (upperLimit - lowerLimit > MIN_ACCURACY) {
    const newLimit = (upperLimit + lowerLimit) / 2;

    if (e ** newLimit > x) upperLimit = newLimit;
    else lowerLimit = newLimit;
  };

  return (upperLimit + lowerLimit) / 2;
}

export { ln, withinRange, MIN_ACCURACY };
