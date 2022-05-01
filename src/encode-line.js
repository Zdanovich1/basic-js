const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  let count = 1;

  let arr = str.split('')

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
      count = count + 1;
    } else if (arr[i] !== arr[i + 1]) {
      result.push(count);
      result.push(arr[i]);

      arr.splice(0, i);
      i = 0;
      count = 1;
    }
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] == 1) {
      result.splice(j, 1)
    }
  }

  let string = result.join('')
  //console.log(string)
  return string

}

module.exports = {
  encodeLine
};
