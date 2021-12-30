
/**
 * Calculates the minimum amount of fuel needed to line
 * up the crabs
 * 
 * @param {Array} crabs   an array of crab positions
 * @param {Boolean} crabs true if we want to spit out some debug 
 * output
 * @returns the minimum amount of fuel needed to line up
 * the crabs
 */
module.exports = function minimizeFuel (crabs, costFunction) {
  let currentBest = Number.MAX_VALUE;
  let maxPosition = Math.max.apply(Math.max, crabs);

  for (let position = 0; position < maxPosition; position++) {
    let cost = costFunction(crabs, position);

    if (cost < currentBest) {
      currentBest = cost;
    }
  }

  return currentBest;
}