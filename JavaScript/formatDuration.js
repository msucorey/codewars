// The function must accept a non-negative integer. If it is zero, it just
// returns "now". Otherwise, the duration is expressed as a combination of years,
// days, hours, minutes and seconds.

const MINUTE_SECONDS = 60;
const HOUR_SECONDS = MINUTE_SECONDS * 60;
const DAY_SECONDS = HOUR_SECONDS * 24;
const YEAR_SECONDS = DAY_SECONDS * 365;

function formatDuration (seconds) {
  // Complete this function
  if (seconds === 0) return 'now';
}


formatDuration(1);
// , "1 second");
formatDuration(62);
// , "1 minute and 2 seconds");
formatDuration(120);
// , "2 minutes");
formatDuration(3600);
// , "1 hour");
formatDuration(3662);
// , "1 hour, 1 minute and 2 seconds");
