const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  let newArr = arr.slice();
  //basic sequence interactions work well
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] === '--discard-next' || newArr[0] === '--discard-prev' || newArr[0] === '--double-next' || newArr[0] === '--double-prev') newArr.shift();
    if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--discard-prev' || newArr[newArr.length - 1] === '--double-next' || newArr[newArr.length - 1] === '--double-prev') newArr.pop();
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      newArr.splice(i + 1, 1);
      break;
    }

    if (newArr[i] === '--discard-prev') newArr.splice(i - 1, 1);
    if (newArr[i] === '--double-next') newArr.splice(i + 1, 0, newArr[i + 1]);

    if (newArr[i] === '--double-prev') {
      newArr.splice(i - 1, 0, newArr[i - 1]);
      break;
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === '--double-prev' || newArr[j] === '--double-next' || newArr[j] === '--discard-prev' || newArr[j] === '--discard-next') {
      newArr.splice(j, 1);
      j--;
    }
  }
  return newArr
}

module.exports = {
  transform
};
