"use strict";

function encrypt(text, n) {
  if (text === null) {
    return null;
  }
  if (n === 0 || text.length === 0) {
    return text;
  }
  var result = text;
  for (var i = 1; i <= n; i++) {
    var left = "";
    var right = "";
    for (var j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        right = right.concat(result[j]);
      } else {
        left = left.concat(result[j]);
      }
    }
    result = left.concat(right);
  }
  return result;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) {
    return null;
  }
  if (n === 0 || encryptedText.length === 0) {
    return encryptedText;
  }
  var result = encryptedText;
  var midpoint = result.length / 2;
  for (var i = 1; i <= n; i++) {
    var left = result.slice(0, midpoint);
    var l_idx = 0;
    var right = result.slice(midpoint, result.length);
    var r_idx = 0;
    result = "";
    for (var j = 0; j < encryptedText.length; j++) {
      if (j % 2 === 0) {
        result = result.concat(right[r_idx]);
        r_idx++;
      } else {
        result = result.concat(left[l_idx]);
        l_idx++;
      }
    }
  }
  return result;
}

encrypt("This is a test!", 0);
// "This is a test!"
encrypt("This is a test!", 1);
// "hsi  etTi sats!"
encrypt("This is a test!", 2);
// "s eT ashi tist!"
encrypt("This is a test!", 3);
// " Tah itse sits!"
encrypt("This is a test!", 4);
// "This is a test!"
encrypt("This is a test!", -1);
// "This is a test!"
encrypt("This kata is very interesting!", 1);
// "hskt svr neetn!Ti aai eyitrsig"

decrypt("This is a test!", 0);
// "This is a test!"
decrypt("hsi  etTi sats!", 1);
// "This is a test!"
decrypt("s eT ashi tist!", 2);
// "This is a test!"
decrypt(" Tah itse sits!", 3);
// "This is a test!"
decrypt("This is a test!", 4);
// "This is a test!"
decrypt("This is a test!", -1);
// "This is a test!"
decrypt("hskt svr neetn!Ti aai eyitrsig", 1);
// "This kata is very interesting!"

encrypt("", 0);
// ""
decrypt("", 0);
// ""
encrypt(null, 0);
// null
decrypt(null, 0);
// null