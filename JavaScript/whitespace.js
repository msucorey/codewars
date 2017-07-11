// to help with debugging
// function unbleach(n) {
//   if (n) return n.replace(/ /g, 's').replace(/\t/g, 't').replace(/\n/g, 'n');
//   return null;
// }
// solution
function whitespace(input) {
  const inputChars = input.slice();
  let output = '';
  let stack = [];
  const heap = {};
  let numInput;
  const readNumber = () => {};
  const stackManipulation = () => {
    switch (inputChars.shift()) {
      case ' ':
        stack.push(readNumber());
        break;
      case '\t':
        if (inputChars.shift() === ' ') {
          stack.push(stack[stack.length - 1 - readNumber()]);
        } else {
          numInput = readNumber();
          if ((numInput < 0) || numInput >= stack.length) {
            stack = [stack.pop()];
          } else {
            stack.splice(stack.length - 1 - numInput, numInput);
          }
        }
        break;
      case '\n':
        switch (inputChars.shift()) {
          case ' ':
            stack.push(stack[stack.length - 1]);
            break;
          case '\t':
            stack.push(stack.splice(stack.splice(stack.length - 2, 1)));
            break;
          case '\n':
            stack.pop();
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };
  const arithmetic = () => {};
  const heapAccess = () => {};
  const inputOutput = () => {};
  const flowControl = () => {};
  while (inputChars.length > 0) {
    switch (inputChars.shift()) {
      case ' ':
        stackManipulation();
        break;
      case '\t':
        switch (inputChars.shift()) {
          case ' ':
            arithmetic();
            break;
          case '\t':
            heapAccess();
            break;
          case '\n':
            inputOutput();
            break;
          default:
            break;
        }
        break;
      case '\n':
        flowControl();
        break;
      default:
        break;
    }
  }
  return output;
}

whitespace('   \t\n\t\n \t\n\n\n'); // , "1");
whitespace('   \t \n\t\n \t\n\n\n'); // , "2");
whitespace('   \t\t\n\t\n \t\n\n\n'); // , "3");
whitespace('    \n\t\n \t\n\n\n'); // , "0");

whitespace('  \t\t\n\t\n \t\n\n\n'); // "-1");
whitespace('  \t\t \n\t\n \t\n\n\n'); // "-2");
whitespace('  \t\t\t\n\t\n \t\n\n\n'); // "-3");

// desc = "Testing simple flow control edge case";
//   desc = "Expecting exception for unclean termination";
whitespace(''); // Test.expectError(desc, function () {

whitespace('   \t     \t\n\t\n  \n\n\n'); // "A");
whitespace('   \t    \t \n\t\n  \n\n\n'); // "B");
whitespace('   \t    \t\t\n\t\n  \n\n\n'); // "C");

whitespace('blahhhh   \targgggghhh     \t\n\t\n  \n\n\n'); // "A");
whitespace(' I heart \t  cats  \t \n\t\n  \n\n\n'); // "B");
whitespace('   \t  welcome  \t\t\n\t\n to the\nnew\nworld\n'); // "C");

whitespace('   \t\t\n   \t\t\n\t\n \t\t\n \t\n\n\n'); // "33");
whitespace('   \t\t\n \n \t\n \t\t\n \t\n\n\n'); // "33");
whitespace('   \t\n   \t \n   \t\t\n \t  \t \n\t\n \t\n\n\n'); // "1");
whitespace('   \t\n   \t \n   \t\t\n \t  \t\n\t\n \t\n\n\n'); // "2");
whitespace('   \t\n   \t \n   \t\t\n \t   \n\t\n \t\n\n\n'); // "3");
whitespace('   \t\t\n   \t \n \n\t\t\n \t\t\n \t\n\n\n'); // "32");
whitespace('   \t\t\n   \t \n \n\t \n\n\t\n \t\n\n\n'); // "2");
whitespace('   \t\t\n   \t \n   \t\n   \t  \n   \t\t \n   \t \t\n   \t\t\t\n \n\t \t\n \t\t\n\t\n \t\t\n \t\t\n \t\t\n \t\n\n\n'); // 5123");
