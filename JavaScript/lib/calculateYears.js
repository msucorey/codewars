"use strict";

function calculateYears(principal, interest, tax, desired) {
  // your code
  var P = principal;
  var I = interest;
  var T = tax;
  var D = desired;
  var Y = 0;
  do {
    if (D == P) {
      return Y;
    }
    P += P * (1 + I) * (1 - T);
    Y++;
  } while (true);
}

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

// Test.describe("calculateYears", function () {
//   Test.it("Basic tests", function () {
//     testing(calculateYears(1000, 0.05, 0.18, 1100), 3);
//     testing(calculateYears(1000, 0.01625, 0.18, 1200), 14);
//     testing(calculateYears(1000, 0.05, 0.18, 1000), 0);
//   });
// });

/*  Let P be the Principal = 1000.00
  Let I be the Interest Rate = 0.05
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00 */