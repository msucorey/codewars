/**
Alphametics is a type of cryptarithm in which a set of words is written down in the form of a long addition sum or some other mathematical problem. The objective is to replace the letters of the alphabet with decimal digits to make a valid arithmetic sum.

For this kata, your objective is to write a function that accepts an alphametic equation in the form of a single-line string and returns a valid arithmetic equation in the form of a single-line string.

Could you write:
1) two functions ann and john (parameter n) giving the list of the numbers of katas Ann and John should take on the first n days (see first examples below)?
2) The total number of katas taken by ann function sum_ann(n) and john function sum_john(n) - on the first n days?

Test Examples
INPUT:    "SEND + MORE = MONEY"
SOLUTION: "9567 + 1085 = 10652"

INPUT:    "ELEVEN + NINE + FIVE + FIVE = THIRTY"
SOLUTION: "797275 + 5057 + 4027 + 4027 = 810386"

@see https://www.codewars.com/kata/5b5fe164b88263ad3d00250b
 */

const newLetterMapValue = () => ({
  baseValue: 0,
  multiplier: 0
});

const letterMap = {};

const isUpperAlpha = char => {
  const code = char.charCodeAt(0);

  return (code > 64) && (code < 91);
};

const initializeLetterMap = string => {
  string.forEach(char => {
    if (isUpperAlpha(char) && !letterMap.char) letterMap.char = newLetterMapValue();
  });
};

const reverseString = string => string.split('').reverse().join('');

const updateBaseValues = (summand, additive = true) => {
  const posNegOne = additive ? 1 : -1;
  reverseString(summand).forEach((char, i) => {
    letterMap[char].baseValue += additive * 10 ** i;
  })
};

const hasRepeatedCahrs = str => new Set(str).size === str.length;

const alphametics = inputString => {
  let answer;
  initializeLetterMap(inputString);

  const [leftSide, rightSide] = inputString.split('=');
  
  leftSide.trim().split(' + ').forEach(summand => {
    updateBaseValues(summand);
  });
  updateBaseValues(rightSide.trim(), false);

  const arrayOfLetters = Object.keys(letterMap);
  const numUniqueLetters = arrayOfLetters.length;

  for (let x =1; x <= 10 ** numUniqueLetters; x++) {
    thisMapping = String(x);
    if (hasRepeatedCahrs(thisMapping)) continue;
    let thisSum = 0;

    thisMapping.forEach((digit, i) => {
      thisSum += letterMap[arrayOfLetters[i]].baseValue * digit;
    });
    if (thisSum === 0) {
      answer = thisMapping;
      break;
    }
  }

  console.log('answer', answer)
};

alphametics('ELEVEN + NINE + FIVE + FIVE = THIRTY');