// https://www.codewars.com/kata/binomial-expansion

export const expand = (expression) => {
  console.log('expression', expression);

  let localCopy = expression;

  let a;
  let b;
  let sign = 1;
  let exponent;
  let expressionParsed = false;

  while (!expressionParsed) {
    localCopy = localCopy.slice(1);
    const thisChar = localCopy[0];
    if (thisChar === '-') {
      sign = -1;
    }
    if ('123456789'.includes(thisChar)) {
      if (a && b) exponent = +thisChar;
      if (a && !b) b = sign * thisChar;
      if (!a) a = sign * thisChar;
      sign = 1;
    }
    expressionParsed = a && b && exponent;
  }

  return null;
};

export default expand;
