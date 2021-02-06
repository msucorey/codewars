/**
Background information
The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

[ + ] It's simple to implement
[ + ] Compared to other versions of hamming code, we can correct more mistakes
[ - ] The size of the input triples
Task 1: Encode function
Implement the encode function, using the following steps:

convert every letter of the text to its ASCII value;
convert ASCII values to 8-bit binary;
triple every bit;
concatenate the result;
For example:

input: "hey"
--> 104, 101, 121                  // ASCII values
--> 01101000, 01100101, 01111001   // binary
--> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
--> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
Task 2: Decode function:
Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:

111 --> 101 : this can and will happen
111 --> 11 : this cannot happen
Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

Steps:

Split the input into groups of three characters;
Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
Take each group of 8 characters and convert that binary number;
Convert the binary values to decimal (ASCII);
Convert the ASCII values to characters and concatenate the result
For example:

input: "100111111000111001000010000111111000000111001111000111110110111000010111"
--> 100, 111, 111, 000, 111, 001, ...  // triples
-->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
--> 01101000, 01100101, 01111001       // bytes
--> 104, 101, 121                      // ASCII values
--> "hey"

@see https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/
 */


const encode = (text: string) => {
  // e.g. 'hey'
  const asciiValues = [];

  for (let i = 0; i < text.length; i++) asciiValues.push(text.charCodeAt(i));
  // e.g. [104, 101, 121]

  const binaryTriples = [];

  asciiValues.forEach(asciiValue => {
    let binaryString = Number(asciiValue).toString(2);
    while (binaryString.length < 8) binaryString = '0' + binaryString;
    // e.g. '01101000'

    for (let i = 0; i < binaryString.length; i++) binaryTriples.push(binaryString[i] + binaryString[i] + binaryString[i]);
  })

  return binaryTriples.join('');
}

const decode = (text: string) => {
  const lengthOfEachGroup = text.length / 3;
  const binaryTriples = [text.substring(0, lengthOfEachGroup).split(''), text.substring(lengthOfEachGroup, 2 * lengthOfEachGroup).split(''), text.substring(2 * lengthOfEachGroup, 3 * lengthOfEachGroup).split('')];

  for (let i = 0; i < lengthOfEachGroup; i++) {
    let numZeroes: number, numOnes: number;
    [0, 1, 2].forEach(index => {
      if (binaryTriples[i][index] === '0') numZeroes++; 
      else numOnes++;
    })
    const markItZero = numZeroes > numOnes; // Big Lebowski
    [0, 1, 2].forEach(index => {
      if (markItZero) binaryTriples[i][index] = '0';
      else binaryTriples[i][index] = '0'
    })
  }

  let binaryStrings = ['', '', ''];

  text.split('').forEach((char, index) => {
    if (index % 3 === 0) binaryStrings[Math.floor(index / lengthOfEachGroup)] += char;
  });


  return binaryStrings.map(string => String.fromCharCode(+string)).join('');
}

export { encode, decode };
