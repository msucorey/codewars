function comparePowers(n1, n2) {
  const [base1, exp1] = n1;
  const [base2, exp2] = n2;

  const discreteReturn = (n) => {
    if (n > 0) return 1;
    if (n < 0) return -1;
    return 0;
  };

  // equal base
  if (base1 === base2) {
    // check '1' case
    return (base1 > 1) ? discreteReturn(exp2 - exp1) : 0;
  }

  // equal exponents
  if (exp1 === exp2) return discreteReturn(base2 - base1);

  // shrink powers before brute force
  let [newExp1, newExp2] = [exp1, exp2];
  while ((newExp1 > 2) && (newExp2 > 2)) {
    newExp1 /= 2;
    newExp2 /= 2;
  }

  return discreteReturn((base2 ** newExp2) - (base1 ** newExp1));
}

export default comparePowers;
