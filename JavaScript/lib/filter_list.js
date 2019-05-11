'use strict';

function filter_list(l) {
  // Return a new array with the strings filtered out
  var result = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number') {
      result.push(l[i]);
    }
  }
  return result;
}

console.log(filter_list([1, 2, 'a', 'b'])); //,[1,2])
console.log(filter_list([1, 'a', 'b', 0, 15])); //,[1,0,15])
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); //,[1,2,123])