'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var previousGuesses = [];
var digitsNotGood = [];

var generateNewGuess = function generateNewGuess() {
  var guess = Math.round(1000 * Math.random());
  if (guess < 100 || guess.toString().split('').some(function (letter) {
    return digitsNotGood.includes(letter);
  }) || previousGuesses.includes(guess)) {
    return generateNewGuess(digitsNotGood);
  }
  return guess.toString();
};

var checkGuess = function checkGuess(guess, secret) {
  var guessDigits = guess.split('');
  var secretDigits = secret.split('');
  var numGood = 0;
  var numPerf = 0;

  guessDigits.forEach(function (digit, idx) {
    if (secretDigits[idx] === guessDigits[idx]) {
      numPerf += 1;
    } else if (secretDigits.includes(digit)) {
      numGood += 1;
    }
  });

  return [numPerf, numGood];
};

var guessNumber = function guessNumber(secretNum, guessedNum, numPerf, numGood) {
  if (numPerf === secretNum.length) {
    console.log('you guess it!!!!');
    return guessedNum;
  }

  previousGuesses.push(guessedNum);
  console.log(previousGuesses);

  if (numGood === 0) {
    digitsNotGood = digitsNotGood.concat(guessedNum.split(''));
    var _newGuess = generateNewGuess();

    var _checkGuess = checkGuess(_newGuess, secretNum),
        _checkGuess2 = _slicedToArray(_checkGuess, 2),
        _nextNumPerf = _checkGuess2[0],
        _nextNumGood = _checkGuess2[1];

    return guessNumber(secretNum, _newGuess, _nextNumPerf, _nextNumGood);
  }
  var newGuess = generateNewGuess();

  var _checkGuess3 = checkGuess(newGuess, secretNum),
      _checkGuess4 = _slicedToArray(_checkGuess3, 2),
      nextNumPerf = _checkGuess4[0],
      nextNumGood = _checkGuess4[1];

  return guessNumber(secretNum, newGuess, nextNumPerf, nextNumGood);
};

guessNumber('123', '333', 1, 3);