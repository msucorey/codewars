function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  const words = this.words;
  const letterCounter = (word) => {
    const hash = {};
    word.split('').forEach((char) => {
      hash[char] = hash[char] || 0;
      hash[char] += 1;
    });
    return hash;
  };
  const termCount = letterCounter(term);
  let minWord = 'debug!';
  let minChanges = 100;
  words.forEach((word) => {
    const wordCount = letterCounter(word);
    let matchedLetters = 0;
    const letters = [...new Set(Object.keys(termCount).concat(Object.keys(wordCount)))];
    letters.forEach((letter) => {
      matchedLetters += Math.min(termCount[letter] || 0, wordCount[letter] || 0);
    });
    const changes = Math.max(term.length, word.length) - matchedLetters;
    if (changes < minChanges) {
      minWord = word;
      minChanges = changes;
    }
  });
  return minWord;
};

const test = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(test.findMostSimilar('heaven'));
