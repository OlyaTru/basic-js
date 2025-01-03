const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let k = '';
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]) {
      k = +k + 1;
    } else {
      if(k) {
        result += (k + 1) + arr[i];
        k = '';
      } else {
        result += arr[i];
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
