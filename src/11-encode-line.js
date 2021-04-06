/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  const arr = [...str];
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] !== arr[i]) {
      if (counter > 0) {
        const j = `${counter + 1}`;
        counter = 0;
        res.push(j);
      }
      res.push(arr[i]);
    } else {
      counter += 1;
    }
  }
  const result = res.join('');
  return result;
}

module.exports = encodeLine;
