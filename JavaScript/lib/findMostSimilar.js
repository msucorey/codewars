'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  var words = this.words;
  var letterCounter = function letterCounter(word) {
    var hash = {};
    word.split('').forEach(function (char) {
      hash[char] = hash[char] || 0;
      hash[char] += 1;
    });
    return hash;
  };
  var termCount = letterCounter(term);
  var minWord = 'debug!';
  var minChanges = 100;
  words.forEach(function (word) {
    var wordCount = letterCounter(word);
    var matchedLetters = 0;
    var letters = [].concat(_toConsumableArray(new Set(Object.keys(termCount).concat(Object.keys(wordCount)))));
    letters.forEach(function (letter) {
      matchedLetters += Math.min(termCount[letter] || 0, wordCount[letter] || 0);
    });
    var changes = Math.max(term.length, word.length) - matchedLetters;
    if (changes < minChanges) {
      minWord = word;
      minChanges = changes;
    }
  });
  return minWord;
};

var test = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(test.findMostSimilar('heaven'));