/**
 * Calculates the fuel costs using an arithmetic series
 * 
 * @param {Array} positions array of crab positions
 * @param {Number} goTo where to lineup
 * @returns the fuel costs for the position
 */
module.exports = function getArithmeticCost (positions, goTo) {
  return positions.map(position => {
    let n = Math.abs(position - goTo);
    return (n * (n + 1)) / 2;
  }).reduce((s, v) => s +v, 0);
}