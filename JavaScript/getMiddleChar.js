export const getMiddleChar = (inputString) => {
  const length = inputString.length;
  const isEven = Math.floor(length / 2) === length / 2;

  if (isEven) {
    const startChar = (length / 2) - 1;
    const endChar = startChar + 1;
    return inputString.slice(startChar, endChar + 1);
  } else {
    const targetChar = Math.floor(length / 2);
    return inputString[targetChar];
  }
};

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

export default getMiddleChar;
