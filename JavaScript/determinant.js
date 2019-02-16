const determinant = (matrix) => {
  // recursion base cases
  if (matrix.length === 1) return matrix[0][0];
  if (matrix.length === 2) {
    const [a, b] = matrix[0];
    const [c, d] = matrix[1];
    return (a * d) - (b * c);
  }
  // set up to recurse for larger matrices
  let result = 0;
  let addSubtract = 1; // will be flipped as result builds
  matrix[0].forEach((itemInFirstRow, idx) => {
    const subMatrix = [...matrix];
    subMatrix.shift();
    subMatrix.forEach((row, subIdx) => {
      subMatrix[subIdx] = row.filter((_, i) => i !== idx);
    });
    result += itemInFirstRow * determinant(subMatrix) * addSubtract; // recurse
    addSubtract *= -1;
  });
  return result;
};

module.exports = determinant;
