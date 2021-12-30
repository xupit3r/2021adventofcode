/**
 * Calculates the fuel costs for a provided position, using a 
 * basic difference of position
 * 
 * @param {Array} positions array of crab positions
 * @param {Number} goTo where to lineup
 * @returns the fuel costs for the position
 */
module.exports = function getLinearCost (positions, goTo) {
  return positions.map(position => {
    return Math.abs(position - goTo);
  }).reduce((s, v) => s +v, 0);
}