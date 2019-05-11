'use strict';

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    var result = '';
    for (var i in str) {
      if (abc.includes(str[i])) {
        var keyLetter = key[i % key.length];
        var shift = abc.indexOf(keyLetter);
        var index = (abc.indexOf(str[i]) + shift) % abc.length;
        result += abc[index];
      } else {
        result += str[i];
      }
    }
    console.log(result);
    return result;
  };
  this.decode = function (str) {
    var result = '';
    for (var i in str) {
      if (abc.includes(str[i])) {
        var keyLetter = key[i % key.length];
        var shift = abc.indexOf(keyLetter);
        var index = (abc.indexOf(str[i]) - shift) % abc.length;
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
var c = new VigenèreCipher(key, abc);

c.encode('codewars');
// , 'rovwsoiv');
c.encode('srawedoc');
// , 'hrsoarff');