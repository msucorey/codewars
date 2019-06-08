// https://www.codewars.com/kata/unique-digit-sequence/train/

const defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findNum = (n, array = defaultInputArray) => {
  if (array[n]) return array[n];
  return null;
};

export default findNum;
