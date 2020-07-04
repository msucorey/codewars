function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let result = '';
    for (let i in str) {
      if (abc.includes(str[i])) {
        let keyLetter = key[i % key.length];
        let shift = abc.indexOf(keyLetter);
        let index = (abc.indexOf(str[i]) + shift) % abc.length;
        result += abc[index];
      } else {
        result += str[i];
      }
    }
    console.log(result);
    return result;
  };
  this.decode = function (str) {
    let result = '';
    for (let i in str) {
      if (abc.includes(str[i])) {
        let keyLetter = key[i % key.length];
        let shift = abc.indexOf(keyLetter);
        let index = (abc.indexOf(str[i]) - shift) % abc.length;
        if (index < 0) index += abc.length;
        result += abc[index];
      } else {
        result += str[i];
      }
    }
    console.log(result);
    return result;
  };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password";
const c = new VigenèreCipher(key, abc);

c.encode('codewars');
// , 'rovwsoiv');
c.encode('srawedoc');
// , 'hrsoarff');
