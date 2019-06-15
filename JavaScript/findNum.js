// https://www.codewars.com/kata/unique-digit-sequence/train/

const defaultInputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const intersection = (a, b) => a.filter(el => b.includes(el));

const nextNum = (array) => {
  const lastNum = array[array.length - 1];
  const lastNumDigits = lastNum.toString().split('');

  let nextSeqNum = 4 + Math.floor(((defaultInputArray.length) - 10) / 2);

  while (true) {
    if (!array.includes(nextSeqNum)) {
      const nextSeqNumDigits = nextSeqNum.toString().split('');
      const commonDigits = intersection(lastNumDigits, nextSeqNumDigits);
      if (!commonDigits.length) return nextSeqNum;
    }
    nextSeqNum += 1;
  }
};

const findNum = (n, array = defaultInputArray) =>
  array[n] || findNum(n, array.concat(nextNum(array)));
