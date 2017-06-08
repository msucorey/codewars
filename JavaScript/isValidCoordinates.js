function isValidCoordinates(coordinates){
  let [lat, lon, err] = coordinates.split(',');
  if (!lat || !lon) return false;
  if (err) return false;
  const latNum = Number(lat);
  const lonNum = Number(lon);
  if (lat != latNum) return false;
  if (lon != lonNum) return false;
  if (latNum < -90 || latNum > 90) return false;
  if (lonNum < -180 || lonNum > 180) return false;
  if (lat.match(/[a-zA-Z]/)) return false;
  if (lon.match(/[a-zA-Z]/)) return false;
  return true;
}

const ValidCoordinates = [
    "-23, 25",
    "4, -3",
    "24.53525235, 23.45235",
    "04, -23.234235",
    "43.91343345, 143"
  ];
  console.log("valid entries");
for (let i in ValidCoordinates) console.log(isValidCoordinates(ValidCoordinates[i]));
const InvalidCoordinates = [
    "23.234, - 23.4234",
    "2342.43536, 34.324236",
    "N23.43345, E32.6457",
    "99.234, 12.324",
    "6.325624, 43.34345.345",
    "0, 1,2",
    "0.342q0832, 1.2324",
    "23.245, 1e1"
  ];
  console.log("invalid entries");
  for (let i in InvalidCoordinates) console.log(isValidCoordinates(InvalidCoordinates[i]));
