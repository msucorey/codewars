// https://www.codewars.com/kata/unique-digit-sequence/train/

const defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let lowestNextSeqNum = 11;

const noIntersectionMemo = {};

const noIntersection = (num1, num2) => {
  const num1String = num1.toString();
  const num2String = num2.toString();
  const combinedString = num1String + num2String;
  if (noIntersectionMemo[combinedString]) return noIntersectionMemo[combinedString][0];
  const num1Array = num1String.split('');
  const num2Array = num2String.toString().split('');
  for (let i = 0; i < num1Array.length; i += 1) {
    if (num2Array.includes(num1Array[i])) {
      noIntersection[combinedString] = [false];
      return false;
    }
  }
  noIntersection[combinedString] = [true];
  return true;
};

const nextNum = (array) => {
  const lastNum = array[array.length - 1];

  let nextSeqNum = lowestNextSeqNum;

  let found = false;
  while (!found) {
    if (!array.includes(nextSeqNum)) {
      if (noIntersection(lastNum, nextSeqNum)) found = true;
    }
    if (!found) nextSeqNum += 1;
  }
  console.log('nextSeqNum', nextSeqNum, array.length - 1);
  if (!found && nextSeqNum === lowestNextSeqNum + 1) lowestNextSeqNum = nextSeqNum;
  if (found) return nextSeqNum;
};

const findNum = (n, array = defaultInputArray) =>
  array[n] || findNum(n, array.concat(nextNum(array)));

export default findNum;
