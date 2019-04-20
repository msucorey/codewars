const containers = (input) => {
  const stacks = [];
  let loaded;
  let stackLoaded;
  input.split('').forEach((container) => {
    loaded = false;
    if (!stacks.length) {
      stacks.push(container);
      loaded = true;
    } else {
      stacks.forEach((stack, i) => {
        if (loaded) return;
        const topContainer = stack[stack.length - 1];
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
