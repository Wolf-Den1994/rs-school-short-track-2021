/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const flo = [];
  let count = 1;
  const count2 = 1;
  for (let i = 0; i < names.length; i += 1) {
    for (let j = 0; j < names.length; j += names.length) {
      if (names[i] === flo[j]) {
        flo.push(`${names[i]}(${count})`);
        count += 1;
        break;
      } else if (`${flo[j]}(${count2})` === `${names[i]}`) {
        flo.push(`${names[i]}(${count2})`);
      } else {
        flo.push(names[i]);
      }
    }
  }
  return flo;
}

module.exports = renameFiles;
