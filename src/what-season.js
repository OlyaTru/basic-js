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
  if(!date) {return 'Unable to determine the time of year!'};

  if(date.hasOwnProperty('toString') || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;
  let season = Math.floor(month / 3);
  if(season === 0 || season === 4) {return 'winter'};
  if(season === 1) {return 'spring'};
  if(season === 2) {return 'summer'};
  if(season === 3) {return 'autumn'}
}

module.exports = {
  getSeason
};
