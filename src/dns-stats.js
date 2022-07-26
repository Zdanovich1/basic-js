const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let arr = [];

  domains.map(function (elem) {
    let firstDotIndex = elem.indexOf('\.');
    let secondDotIndex = elem.lastIndexOf('\.')

    if (firstDotIndex !== secondDotIndex) {

      arr.push('\.' + elem)
      arr.push(elem.slice(firstDotIndex, elem.length))
      arr.push(elem.slice(secondDotIndex, elem.length))

    } else {

      arr.push('\.' + elem)
      arr.push(elem.slice(firstDotIndex, elem.length))

    }
  })

  let arr1 = arr.map(item => '\.' + item.split('.').reverse().join('.')).map(el => el.slice(0, el.length - 1))
  arr1.sort((a, b) => a.length - b.length)

  let result = {};
  let count = 1;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1]) {
      count = count + 1;
    } else if (arr1[i] !== arr1[i + 1]) {
      result[arr1[i]] = count;
      arr1.splice(0, i);
      i = 0;
      count = 1;
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
