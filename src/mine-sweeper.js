const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for(let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for(let j = 0; j < matrix[0].length; j++) {
      result[i][j] = 0;
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === true) {
        visitNeighbors(i, j, matrix, result);
      }
    }
  }

  return result;
}

function visitNeighbors(row, col, matrix, result) {
  for(let i = row - 1; i <= row + 1; i++) {
    for(let j = col - 1; j <= col + 1; j++) {
      if(i === row && j === col) {continue;}
      if(i < 0 || i >= matrix.length) {continue;}
      if(j < 0 || j >= matrix[0].length) {continue;}
      result[i][j] += 1;
    }
  }
}

module.exports = {
  minesweeper
};
