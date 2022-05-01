const { NotImplementedError } = require('../extensions/index.js');

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

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  let arr1 = arr.slice()
  //console.log(arr1)

  let sortArr = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== -1) {
      sortArr.push(arr1[i])
    }
  }

  sortArr.sort(compareNumeric)
  //console.log(sortArr)

  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] === -1) {
      sortArr.splice(j, 0, arr1[j])
    }
  }

  //console.log(sortArr)
  return sortArr

}

module.exports = {
  sortByHeight
};
