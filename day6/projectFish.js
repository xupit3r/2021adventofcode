const BASE_REPORDUCE_DAYS = 6;

/**
 * Projects the fish population out to a specified number 
 * of days
 * 
 * @param {Array} fish an array of the initial fish states
 * @param {Number} days the number of days we wish to project
 * (defaults to 80 days)
 * @param {Boolean} debug true if we should include debug output
 * @return an array of fish states after the specified number of days
 */
module.exports = function projectFish (fish, days = 80, debug = false) {
  let state = fish;
  for (let i = 0; i < days; i++) {
    let additions = [];

    state = state.map(fishState => {
      fishState--;

      if (fishState < 0) {
        additions.push(8);
        return BASE_REPORDUCE_DAYS;
      }

      return fishState;
    }).concat(additions);

    if (debug) {
      console.log(`after ${i + 1} days ${state.join()}`);
    }
  }

  return state;
}