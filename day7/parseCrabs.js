/**
 * Crab positions in a usable format
 * 
 * @param {Array} data crab positions as read from file
 * @returns an array of crab positions
 */
module.exports = function parseCrabs (data) {
  return data[0].split(',').map(v => +v);
}