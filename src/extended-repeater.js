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
  if(!options.separator) {
    options.separator = '+';
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if('addition' in options) {
    options.addition += '';
  }
  str += '';
  let additionArr = new Array(options.additionRepeatTimes);
  additionArr.fill(options.addition);
  let result = new Array(options.repeatTimes);
  result.fill(str);
  let mainResult = result.map((item) => item + additionArr.join(options.additionSeparator));
  return mainResult.join(options.separator);
}

module.exports = {
  repeater
};
