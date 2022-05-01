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

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }


  let newArr = arr.slice();

  // console.log(arr);
  //console.log(newArr);

  let resultArr = [];

  for (let i = 0; i < newArr.length; i++) {
    /*basic sequence interactions work well*/
    if (typeof newArr[0] == 'string') {
      newArr.shift()
    }
    if (typeof newArr[newArr.length - 1] == 'string') {
      newArr.pop()
    }



    if (newArr[i] === '--discard-next') {
      //console.log(newArr[i])
      newArr.splice(i, 2)
      //console.log(newArr[i])
    }

    if (newArr[i] === '--discard-prev') {
      newArr.splice(i - 1, 2)
    }

    if (newArr[i] === '--double-next') {

      newArr.splice(i, 1, newArr[i + 1])
    }

    if (newArr[i] === '--double-prev') {
      // console.log('catch')
      // console.log(newArr[i])
      newArr.splice(i - 1, 0, newArr[i - 1])
      // console.log(newArr[i])
      newArr.splice(i + 1, 1)


    }


  }

  // console.log(arr);
  return newArr;

}

module.exports = {
  transform
};
