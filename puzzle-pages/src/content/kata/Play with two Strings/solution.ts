/**
Your task is to Combine two Strings. But consider the rule...

By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

And here's the rule:
Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
I think that's all;-)...

@see https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/
 */

const charCount = (str: string) => {
  const chars: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  return chars;
};

const isUpperCase = (c: string) => c === c.toUpperCase();

const isOdd = (n: number) => n % 2 === 1;

const upperCaseArray = (arr: string[]) => arr.map((c) => c.toUpperCase());
const lowerCaseArray = (arr: string[]) => arr.map((c) => c.toLowerCase());

const changeCase = (c: string) =>
  isUpperCase(c) ? c.toLowerCase() : c.toUpperCase();

const workOnStrings = (a: string, b: string) => {
  let aArr = a.split("");
  let bArr = b.split("");
  const aArrUpper = upperCaseArray(aArr);
  const bArrUpper = upperCaseArray(bArr);
  const aArrLower = lowerCaseArray(aArr);
  const bArrLower = lowerCaseArray(bArr);
  const aCharCount = charCount(a);
  const bCharCount = charCount(b);

  aArr = aArr.map((c) =>
    [...bArrLower, ...bArrUpper].includes(c) &&
    isOdd(bCharCount[c.toLowerCase()])
      ? changeCase(c)
      : c
  );
  bArr = bArr.map((c) =>
    [...aArrLower, ...aArrUpper].includes(c) &&
    isOdd(aCharCount[c.toLowerCase()])
      ? changeCase(c)
      : c
  );

  return aArr.join("") + bArr.join("");
};

export { isUpperCase, workOnStrings };
