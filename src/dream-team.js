const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let resultarr = [];
  let result;

  if (!Array.isArray(members)) {
    return false
  }

  for (let item of members) {

    if (typeof item === 'string') {

      resultarr.push(item.trim().toUpperCase()[0])

      result = resultarr.sort().join('');
    }
  }

  if (resultarr.length == 0) {
    return false
  }

  return result;
}

module.exports = {
  createDreamTeam
};
