const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCopySorted = arr.slice().sort((a, b) => a - b);
  let arrSortedWithoutMinusOne = arrCopySorted.filter((item) => item !== -1);
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      result.push(arr[i]);
      continue;
    } else {
      result.push(arrSortedWithoutMinusOne.splice(0, 1));
    }
  }
  return result.flat();
}

module.exports = {
  sortByHeight
};
