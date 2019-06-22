// https://www.codewars.com/kata/unique-digit-sequence/train/

const defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const noIntersection = (num1, num2) => {
  const num1String = num1.toString();
  const num2String = num2.toString();
  const num1Array = num1String.split('');
  const num2Array = num2String.split('');
  return !num1Array.some(el => num2Array.includes(el));
};

const nextNum = (array) => {
  const lastNum = array[array.length - 1];

  let nextSeqNum = 10;

  let found = false;
  while (!found) {
    nextSeqNum += 1;
    if (!array.slice(9).includes(nextSeqNum)) {
      if (noIntersection(lastNum, nextSeqNum)) found = true;
    }
  }
  return nextSeqNum;
};

const findNum = (n, array = defaultInputArray) =>
  array[n] || findNum(n, array.concat(nextNum(array)));

export default findNum;
