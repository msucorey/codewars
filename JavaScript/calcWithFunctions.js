function zero(fn = null) {
  if (fn) {
    return fn(0);
  } else {
    return 0;
  }
}
function one(fn = null) {
  if (fn) {
    return fn(1);
  } else {
    return 1;
  }
}
function two(fn = null) {
  if (fn) {
    return fn(2);
  } else {
    return 2;
  }
}
function three(fn = null) {
  if (fn) {
    return fn(3);
  } else {
    return 3;
  }
}
function four(fn = null) {
  if (fn) {
    return fn(4);
  } else {
    return 4;
  }
}
function five(fn = null) {
  if (fn) {
    return fn(5);
  } else {
    return 5;
  }
}
function six(fn = null) {
  if (fn) {
    return fn(6);
  } else {
    return 6;
  }
}
function seven(fn = null) {
  if (fn) {
    return fn(7);
  } else {
    return 7;
  }
}
function eight(fn = null) {
  if (fn) {
    return fn(8);
  } else {
    return 8;
  }
}
function nine(fn = null) {
  if (fn) {
    return fn(9);
  } else {
    return 9;
  }
}

function plus(arg) {
  return (nextArg => arg + nextArg);
}
function minus(arg) {
  return (nextArg => nextArg - arg);
}
function times(arg) {
  return (nextArg => arg * nextArg);
}
function dividedBy(arg) {
  return (nextArg => nextArg / arg);
}

console.log(seven(times(five())));
// , 35);
console.log(four(plus(nine())));
// , 13);
console.log(eight(minus(three())));
// , 5);
console.log(six(dividedBy(two())));
// , 3);
