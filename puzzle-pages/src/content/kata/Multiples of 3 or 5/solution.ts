// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// @see https://www.codewars.com/kata/514b92a657cdc65150000006

const isNaturalNumber = (anyInput: any) => {
  if (typeof anyInput !== 'number') return false;
  if (anyInput as number < 1) return false;
  if (anyInput as number % 1 !== 0) return false;
  return true;
}

const solution = (naturalNumber: any) => {
  if (!isNaturalNumber(naturalNumber)) throw new Error('not a natural number');

  let result = 0;

  for (let i = 1; i < naturalNumber; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) result += i;
  }

  return result;
}

export { solution };
