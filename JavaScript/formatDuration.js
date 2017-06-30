// The function must accept a non-negative integer. If it is zero, it just
// returns "now". Otherwise, the duration is expressed as a combination of years,
// days, hours, minutes and seconds.

const MINUTE_SECONDS = 60;
const HOUR_SECONDS = MINUTE_SECONDS * 60;
const DAY_SECONDS = HOUR_SECONDS * 24;
const YEAR_SECONDS = DAY_SECONDS * 365;

function formatDuration(numSeconds) {
  if (numSeconds === 0) return 'now';
  const words = [];
  let thisWord = '';
  let remainingSeconds = numSeconds;
  const unitsOfTime = {
    years: Math.floor(remainingSeconds / YEAR_SECONDS),
    days: Math.floor((remainingSeconds %= YEAR_SECONDS) / DAY_SECONDS),
    hours: Math.floor((remainingSeconds %= DAY_SECONDS) / HOUR_SECONDS),
    minutes: Math.floor((remainingSeconds %= HOUR_SECONDS) / MINUTE_SECONDS),
    seconds: remainingSeconds %= MINUTE_SECONDS,
  };
  const wordBuilder = (timeUnitStr) => {
    const thisUnit = unitsOfTime[timeUnitStr];
    if (thisUnit > 0) {
      thisWord = `${thisUnit} ${timeUnitStr}`;
      if (thisUnit === 1) thisWord = thisWord.slice(0, -1);
      words.push(thisWord);
    }
  };
  Object.keys(unitsOfTime).forEach(timeUnit => wordBuilder(timeUnit));
  switch (words.length) {
    case 0:
      return '';
    case 1:
      return words[0];
    case 2:
      return words.join(' and ');
    default:
      return `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`;
  }
}


console.log(formatDuration(1));
// , "1 second");
console.log(formatDuration(62));
// , "1 minute and 2 seconds");
console.log(formatDuration(120));
// , "2 minutes");
console.log(formatDuration(3600));
// , "1 hour");
console.log(formatDuration(3662));
// , "1 hour, 1 minute and 2 seconds");
