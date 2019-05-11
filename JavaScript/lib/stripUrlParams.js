'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function stripUrlParams(urlString) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _urlString$split = urlString.split('?'),
      _urlString$split2 = _slicedToArray(_urlString$split, 2),
      url = _urlString$split2[0],
      query = _urlString$split2[1];

  var queryParams = void 0;
  if (query) {
    queryParams = query.split('&');
  }
  var ignoredParams = array.slice();
  var result = url;
  var finalParams = [];
  if (query) {
    result += '?';
    queryParams.forEach(function (param) {
      if (!ignoredParams.includes(param[0])) {
        finalParams.push(param);
        ignoredParams.push(param[0]);
      }
    });
    result += finalParams.join('?');
  }
  return result;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')); // returns 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])); // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])); // returns 'www.codewars.com'