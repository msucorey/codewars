'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mix(s1, s2) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var s1count = {};
  var s2count = {};
  alphabet.split('').forEach(function (letter) {
    s1count[letter] = 0;
    s2count[letter] = 0;
  });
  s1.split('').forEach(function (char) {
    s1count[char]++;
  });
  s2.split('').forEach(function (char) {
    s2count[char]++;
  });
  var result = [];
  var maxLetters = 0;
  alphabet.split('').forEach(function (letter) {
    if (s1count[letter] && s2count[letter]) {
      if (s1count[letter] > s2count[letter]) {
        result.push(['1', letter, s1count[letter]]);
      } else if (s1count[letter] < s2count[letter]) {
        result.push(['2', letter, s2count[letter]]);
      } else {
        result.push(['=', letter, s2count[letter]]);
      }
    } else if (s1count[letter]) {
      result.push(['1', letter, s1count[letter]]);
    } else if (s2count[letter]) {
      result.push(['2', letter, s2count[letter]]);
    }
  });
  result = result.sort(function (a, b) {
    if (a[2] === b[2]) {
      if (a[0].charCodeAt(0) === b[0].charCodeAt(0)) {
        return a[1].charCodeAt(0) - b[1].charCodeAt(0);
      } else {
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      }
    } else {
      return b[2] - a[2];
    }
  });
  var counts = result.map(function (el) {
    return el[2];
  });
  var maxCount = Math.max.apply(Math, _toConsumableArray(counts));
  var output = [];
  var thisString = "";
  result.forEach(function (arr) {
    if (arr[2] > 1) {
      thisString = "";
      thisString = thisString.concat(arr[0]).concat(':');
      for (var i = 0; i < arr[2]; i++) {
        thisString = thisString.concat(arr[1]);
      }
      output.push(thisString);
    }
  });
  return output.join('/');
}

mix("Are they here", "yes, they are here");
// , "2:eeeee/2:yy/=:hh/=:rr")
mix("looping is fun but dangerous", "less dangerous than coding");
// , "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
mix(" In many languages", " there's a pair of functions");
// , "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
mix("Lords of the Fallen", "gamekult");
// , "1:ee/1:ll/1:oo")
mix("codewars", "codewars");
// , "")
mix("A generation must confront the looming ", "codewarrs");
// , "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")