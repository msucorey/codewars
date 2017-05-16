function solution(input, markers){
  let result = "";
  let commentText = false;
  input.split('').forEach((char) => {
    if (!commentText && markers.includes(char)) {
      commentText = true;
    }
    if (char === '\n') {
      result = result.trim();
      result = result.concat('\n');
      commentText = false;
    } else if (!commentText) {
      result = result.concat(char);
    }
  });
  result = result.trim();
  return result;
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
// "apples, pears\ngrapes\nbananas"
