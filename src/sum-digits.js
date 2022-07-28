const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let res;
function getSumOfDigits(n) {
  res = String(n).split('').reduce((sum, current) => sum + +current, 0);
  if (res - 10 >= 0) getSumOfDigits(res);
  return res;
}

module.exports = {
  getSumOfDigits
};
