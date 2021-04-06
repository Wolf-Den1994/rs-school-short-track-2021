/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const narr = arr.slice().sort((a, b) => a - b);
  const now = [];
  for (let i = 0; i < narr.length; i += 1) {
    if (narr[i] !== -1) {
      now.push(narr[i]);
    }
  }
  let j = 0;
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      for (; j < now.length; j += 1) {
        result.push(now[j]);
        j += 1;
        break;
      }
    }
  }
  return result;
}

module.exports = sortByHeight;
