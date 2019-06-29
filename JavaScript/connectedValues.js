// https://www.codewars.com/kata/connecting-values

function connectedValues(arr, val, coord) {
  const [row, column] = coord;
  if (arr[row][column] !== val) return [];
  /* Implement */
  console.log(arr, val, coord);
  return null;
}

export default connectedValues;
