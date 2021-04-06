/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const a = matrix.map((i, ind, arr) => {
    const j = i.map((item, index) => {
      let int = 0;
      if (arr[ind - 1] && arr[ind - 1][index - 1]) int += 1;
      if (arr[ind - 1] && arr[ind - 1][index]) int += 1;
      if (arr[ind - 1] && arr[ind - 1][index + 1]) int += 1;
      if (arr[ind][index - 1]) int += 1;
      if (arr[ind][index + 1]) int += 1;
      if (arr[ind + 1] && arr[ind + 1][index - 1]) int += 1;
      if (arr[ind + 1] && arr[ind + 1][index]) int += 1;
      if (arr[ind + 1] && arr[ind + 1][index + 1]) int += 1;
      return int;
    });
    return j;
  });
  return a;
}

module.exports = minesweeper;
