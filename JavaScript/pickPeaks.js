function pickPeaks(arr) {
  const result = {
    pos: [],
    peaks: [],
  };
  const resultPop = () => { result.pos.pop(); result.peaks.pop(); };
  let i;
  for (i = 1; i < arr.length - 1; i += 1) {
    if (arr[i] !== (arr[i - 1])) {
      if ((arr[i] > arr[i - 1]) && (arr[i] >= arr[i + 1])) {
        result.pos.push(i);
        result.peaks.push(arr[i]);
      }
    } else if ((result.peaks[result.peaks.length - 1] === arr[i]) && (arr[i] < arr[i + 1])) {
      resultPop();
    }
  }
  if (arr[i] === arr[i - 1]) {
    resultPop();
  }
  return result;
}

console.log(pickPeaks([1, 2, 2, 2, 1]));
