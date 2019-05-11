"use strict";

function zero() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(0);
  } else {
    return 0;
  }
}
function one() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(1);
  } else {
    return 1;
  }
}
function two() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(2);
  } else {
    return 2;
  }
}
function three() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(3);
  } else {
    return 3;
  }
}
function four() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(4);
  } else {
    return 4;
  }
}
function five() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(5);
  } else {
    return 5;
  }
}
function six() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(6);
  } else {
    return 6;
  }
}
function seven() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(7);
  } else {
    return 7;
  }
}
function eight() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(8);
  } else {
    return 8;
  }
}
function nine() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (fn) {
    return fn(9);
  } else {
    return 9;
  }
}

function plus(arg) {
  return function (nextArg) {
    return arg + nextArg;
  };
}
function minus(arg) {
  return function (nextArg) {
    return nextArg - arg;
  };
}
function times(arg) {
  return function (nextArg) {
    return arg * nextArg;
  };
}
function dividedBy(arg) {
  return function (nextArg) {
    return nextArg / arg;
  };
}

console.log(seven(times(five())));
// , 35);
console.log(four(plus(nine())));
// , 13);
console.log(eight(minus(three())));
// , 5);
console.log(six(dividedBy(two())));
// , 3);