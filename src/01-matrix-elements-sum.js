/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const cons = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        cons.push(j);
      }
      for (let k = 0; k < cons.length; k += 1) {
        if (matrix[i][j] !== undefined) {
          if (cons[k] !== j) {
            result += matrix[i][j];
            if (matrix[0] !== matrix[i]) {
              j = matrix[i].length;
            }
          }
        }
      }
      if (cons.length === 0) {
        result += matrix[i][j];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
