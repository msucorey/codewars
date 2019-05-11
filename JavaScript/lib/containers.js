'use strict';

// https://www.codewars.com/kata/containers

var containers = function containers(input) {
  var stacks = [];
  var loaded = void 0;
  var stackLoaded = void 0;
  input.split('').forEach(function (container) {
    loaded = false;
    if (!stacks.length) {
      stacks.push(container);
      loaded = true;
    } else {
      stacks.forEach(function (stack, i) {
        if (loaded) return;
        var topContainer = stack[stack.length - 1];
        if (topContainer >= container) {
          stackLoaded = i;
          loaded = true;
        }
      });
      if (loaded) {
        stacks[stackLoaded] += container;
      } else {
        stacks.push(container);
      }
    }
  });
  return stacks.length;
};

module.exports = containers;