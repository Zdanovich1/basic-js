const { NotImplementedError } = require('../extensions/index.js');

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
  let ind = 0;
  let arr = names.slice();
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (names[i] === arr[j]) {
        ind++
        if (ind > 1) {
          arr[j] = arr[i] + `(${ind - 1})`;
        }
      }
    }
    ind = 0;
  }
  return arr;
}

module.exports = {
  renameFiles
};
