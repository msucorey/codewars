"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isValidCoordinates(coordinates) {
  var _coordinates$split = coordinates.split(','),
      _coordinates$split2 = _slicedToArray(_coordinates$split, 3),
      lat = _coordinates$split2[0],
      lon = _coordinates$split2[1],
      err = _coordinates$split2[2];

  if (!lat || !lon) return false;
  if (err) return false;
  var latNum = Number(lat);
  var lonNum = Number(lon);
  if (lat != latNum) return false;
  if (lon != lonNum) return false;
  if (latNum < -90 || latNum > 90) return false;
  if (lonNum < -180 || lonNum > 180) return false;
  if (lat.match(/[a-zA-Z]/)) return false;
  if (lon.match(/[a-zA-Z]/)) return false;
  return true;
}

var ValidCoordinates = ["-23, 25", "4, -3", "24.53525235, 23.45235", "04, -23.234235", "43.91343345, 143"];
console.log("valid entries");
for (var i in ValidCoordinates) {
  console.log(isValidCoordinates(ValidCoordinates[i]));
}var InvalidCoordinates = ["23.234, - 23.4234", "2342.43536, 34.324236", "N23.43345, E32.6457", "99.234, 12.324", "6.325624, 43.34345.345", "0, 1,2", "0.342q0832, 1.2324", "23.245, 1e1"];
console.log("invalid entries");
for (var _i in InvalidCoordinates) {
  console.log(isValidCoordinates(InvalidCoordinates[_i]));
}