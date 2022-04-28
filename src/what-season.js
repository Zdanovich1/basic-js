const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let now = new Date();

  if (String(now) === String(date)) {
    throw new Error('Invalid date!');
  }

  if (date == null) {
    return 'Unable to determine the time of year!'
  }

  if (typeof date !== 'object') {
    throw new Error('Invalid date!');
  }

  if (isNaN(Date.parse(date))) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth()

  if (isNaN(month)) {
    throw new Error('Invalid date!');
  }


  if (month >= 0 && month <= 1 || month == 11) {
    return 'winter'
  } else if (month >= 2 && month <= 4) {
    return 'spring'
  } else if (month >= 5 && month <= 7) {
    return 'summer'
  } else if (month >= 8 && month <= 10) {
    return 'autumn'
  }

}

module.exports = {
  getSeason
};
