function correct(string) {
  let result = '';
  const misinterpretedCharactersMap = {
    5: 'S',
    0: 'O',
    1: 'I',
  };
  const misinterpretedCharacters = Object.keys(misinterpretedCharactersMap);
  string.split('').forEach((char) => {
    if (misinterpretedCharacters.includes(char)) {
      result += misinterpretedCharactersMap[char];
    } else {
      result += char;
    }
  });
  return result;
}

console.log(correct('L0ND0N'));

// Test.assertEquals(correct("L0ND0N"),"LONDON");
// Test.assertEquals(correct("DUBL1N"),"DUBLIN");
// Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
// Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
// Test.assertEquals(correct("PAR15"),"PARIS");

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1