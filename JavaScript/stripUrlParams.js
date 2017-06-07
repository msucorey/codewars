function stripUrlParams(urlString, array = []) {
  const [url, query] = urlString.split('?');
  let queryParams;
  if (query) {
    queryParams = query.split('&');
  }
  let ignoredParams = array.slice();
  let result = url;
  let finalParams = [];
  if (query) {
    result += '?';
    queryParams.forEach(param => {
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
