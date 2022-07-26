const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let additionArr = [];
  let additionStr;
  let resArr = [];
  let resStr;

  if ('additionRepeatTimes' in options) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(String(options.addition))
    }
  } else {
    additionArr.push(options.addition)
  }

  if ('additionSeparator' in options) {
    additionStr = additionArr.join(options.additionSeparator)
  } else {
    additionStr = additionArr.join('\|')
  }

  if ('repeatTimes' in options) {
    for (let j = 0; j < options.repeatTimes; j++) {
      resArr.push(String(str) + additionStr)
    }
  } else {
    resArr.push(str + additionStr)
  }

  if ('separator' in options) {
    resStr = resArr.join(options.separator)
  } else {
    resStr = resArr.join('\+')
  }
  return resStr
}

module.exports = {
  repeater
};
