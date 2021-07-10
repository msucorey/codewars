/**
 * Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
 * For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
 * @param {number} month - A month as an integer from 1 to 12.
 * @returns {number} - A quarter of the year as an integer number.
 * @throws {Error} - If the month is not between 1 and 12.
 * @see {@link https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/}
 */
const quarterOf = (month:number) => {
  if (month < 1 || month > 12) {
    throw new Error("month must be between 1 and 12");
  };
  return Math.ceil(month / 3);
  // GitHub Copilot's suggestion
  // if (month < 3) {
  //   return 1
  // } else if (month < 6) {
  //   return 2
  // } else if (month < 9) {
  //   return 3
  // } else {
  //   return 4
  // }
}

export { quarterOf };