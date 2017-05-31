function alphabetize(string) {
  return string.split("").sort().join("");
}

function numerize(numString) {
  let result = 0;
  switch (numString) {
    case "+":
      result = 1;
      break;
    case "":
      result = 1;
      break;
    case "-":
      result = -1;
      break;
    default:
      result = Number(numString);
  }
  return result;
}

function simplify(poly){
  let result = "";
  let terms = {};
  let thisTerm = "";
  let thisNum = "";
  let thisChar = "";
  let coefficient = 1;
  for (let i = 0; i < poly.length; i++) {
    thisChar = poly[i];
    if (thisChar.match(/[a-z]/)) { // it's a letter
      if (thisNum === "") {
        thisTerm += thisChar;
      } else {
        coefficient = numerize(thisNum);
        thisNum = "";
        thisTerm += thisChar;
      }
    } else { // it's not a letter
      if (thisTerm === "") {
        thisNum += thisChar;
      } else {
        thisTerm = alphabetize(thisTerm);
        if (terms[thisTerm]) {
          terms[thisTerm] += coefficient;
        } else {
          terms[thisTerm] = coefficient;
        }
        thisTerm = "";
        thisNum += thisChar;
      }
    }
  }
  thisTerm = alphabetize(thisTerm);
  if (terms[thisTerm]) {
    terms[thisTerm] += coefficient;
  } else {
    terms[thisTerm] = coefficient;
  }
  let termsArray = Object.keys(terms);
  termsArray = termsArray.filter(term => terms[term] !== 0);
  termsArray = termsArray.sort();
  termsArray = termsArray.sort((a,b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return 0;
    }
  });
  coefficient = terms[termsArray[0]];
  if (coefficient < 0) {
    result += "-";
  }
  if (Math.abs(coefficient) > 1) {
    result += Math.abs(coefficient).toString();
  }
  result += termsArray[0];
  for (let i = 1; i < termsArray.length; i++) {
    coefficient = terms[termsArray[i]];
    if (coefficient > 0) {
      result += "+";
    } else {
      result += "-";
    }
    if (Math.abs(coefficient) > 1) {
      result += Math.abs(coefficient).toString();
    }
    result += termsArray[i];
  }
  return result;
}

// test reduction by equivalence
simplify("dc+dcba"); // , "cd+abcd")
simplify("2xy-yx"); // ,"xy")
simplify("-a+5ab+3a-c-2a"); // ,"-c+5ab")
// test monomial length ordering
simplify("-abc+3a+2ac"); // ,"3a+2ac-abc")
simplify("xyz-xz"); // ,"-xz+xyz")
// test lexicographical ordering
simplify("a+ca-ab"); // ,"a-ab+ac")
simplify("xzy+zby"); // ,"byz+xyz")
// test no leading +
simplify("-y+x"); // ,"x-y")
simplify("y-x"); // ,"-x+y")
