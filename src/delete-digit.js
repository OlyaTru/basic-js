const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrDigit = n.toString().split('');
  let resultArr = [];
  let arr;
  for(let i = 0; i < arrDigit.length; i++) {
    arr = arrDigit.slice();
    arr.splice(i, 1);
    resultArr.push(+arr.join(''));
  }
  return resultArr.sort((a,b) => a - b).at(-1);
}

module.exports = {
  deleteDigit
};
