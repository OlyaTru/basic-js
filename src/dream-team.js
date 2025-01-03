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
  let resultArr = [];
  if(Array.isArray(members)) {
    for(let item of members) {
      if(typeof(item) === 'string') {
        resultArr.push(item.trim()[0].toUpperCase());
      }
    }
  } else {
    return false;
  }
  return resultArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
