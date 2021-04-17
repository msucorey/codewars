/**
Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

@see https://www.codewars.com/kata/5426d7a2c2c7784365000783/
 */

const balancedParens = (n: number) => {
  switch (n) {
    case 0:
      return [''];
    case 1:
      return ['()'];
    default:
      break;
  }
  const result: Set<string> = new Set();
  const previousResult = balancedParens(n - 1);
  previousResult.map(parensSet => {
    result.add('()' + parensSet);
    result.add(parensSet + '()');
    result.add(`(${parensSet})`)
    let index = 0;
    while (index < parensSet.length) {
      const nextClosedParenIndex = parensSet.indexOf('()', index);
      if (nextClosedParenIndex > 0) {
        result.add(parensSet.slice(0, nextClosedParenIndex + 1) + '()' + parensSet.slice(nextClosedParenIndex + 1));
        result.add(parensSet.slice(0, nextClosedParenIndex) + '()' + parensSet.slice(nextClosedParenIndex));
        result.add(parensSet.slice(0, nextClosedParenIndex + 2) + '()' + parensSet.slice(nextClosedParenIndex + 2));
        index = nextClosedParenIndex + 1;
      } else index = parensSet.length;
    }
    return null;
  });

  return Array.from(result);
}

export { balancedParens };
