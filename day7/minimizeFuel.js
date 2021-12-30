/**
 * Calculates the fuel costs for a provided position
 * 
 * @param {Array} positions array of crab positions
 * @param {Number} goTo where to lineup
 * @returns the fuel costs for the position
 */
function getCost (positions, goTo) {
  return positions.map(position => {
    return Math.abs(position - goTo);
  }).reduce((s, v) => s +v, 0);
}

/**
 * Searchs our positions for the appropriate place to lineup
 * 
 * @param {Array} crabs an array of crab positions
 * @param {Number} startBestAt our current best
 * @param {Number} lineUpAt index of the position to line up at
 * @param {*} direction 
 * @returns 
 */
function search (crabs, startBestAt, lineUpAt, direction = true) {
  let sorted = crabs.sort((a, b) => a - b);
  let searching = true;
  let currentBest = startBestAt;
  let currentIdx = lineUpAt;

  while (searching) {
    let cost = getCost(crabs, sorted[currentIdx]);

    if (cost < currentBest) {
      currentBest = cost;

      if (direction) {
        currentIdx++;
      } else {
        currentIdx--;
      }
    } else {
      searching = false;
    }
  }

  return currentBest;
}

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
module.exports = function minimizeFuel (crabs) {
  let medianIdx = Math.floor(crabs.length / 2);

  return search(
    crabs, 
    search(crabs, 
      Number.MAX_VALUE,
      medianIdx,
      true
    ),
    medianIdx
  );
}