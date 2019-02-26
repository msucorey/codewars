const previousGuesses = [];
let digitsNotGood = [];

const generateNewGuess = () => {
  const guess = Math.round(1000 * Math.random());
  if (guess < 100 || guess.toString().split('').some(letter => digitsNotGood.includes(letter)) || previousGuesses.includes(guess)) {
    return generateNewGuess(digitsNotGood);
  }
  return guess.toString();
};

const checkGuess = (guess, secret) => {
  const guessDigits = guess.split('');
  const secretDigits = secret.split('');
  let numGood = 0;
  let numPerf = 0;

  guessDigits.forEach((digit, idx) => {
    if (secretDigits[idx] === guessDigits[idx]) {
      numPerf += 1;
    } else if (secretDigits.includes(digit)) {
      numGood += 1;
    }
  });

  return [numPerf, numGood];
};

const guessNumber = (secretNum, guessedNum, numPerf, numGood) => {
  if (numPerf === secretNum.length) {
    console.log('you guess it!!!!');
    return guessedNum;
  }

  previousGuesses.push(guessedNum);
  console.log(previousGuesses);

  if (numGood === 0) {
    digitsNotGood = digitsNotGood.concat(guessedNum.split(''));
    const newGuess = generateNewGuess();
    const [nextNumPerf, nextNumGood] = checkGuess(newGuess, secretNum);
    return guessNumber(secretNum, newGuess, nextNumPerf, nextNumGood);
  }
  const newGuess = generateNewGuess();
  const [nextNumPerf, nextNumGood] = checkGuess(newGuess, secretNum);
  return guessNumber(secretNum, newGuess, nextNumPerf, nextNumGood);
};

guessNumber('123', '333', 1, 3);