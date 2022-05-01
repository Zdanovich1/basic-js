const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const arr = String(n).split('')
  let arr1 = arr.slice()
  let resultArr = [];

  //console.log(arr1)

  let numb = arr1.map(function (item, index) {
    //console.log(index)
    arr1 = arr.slice()
    arr1.splice(index, 1)
    //console.log(arr1)
    resultArr.push(+arr1.join(''))

  })

  //console.log(resultArr)

  let max = resultArr[0]
  for (let i = 0; i < resultArr.length; i++) {
    if (max < resultArr[i]) {
      max = resultArr[i];
    }
  }
  //console.log(max)
  return max
}

module.exports = {
  deleteDigit
};
