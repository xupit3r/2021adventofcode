const RECYCLE_DAYS = 6;
const BORN_DAYS = 8;

/**
 * Returns a state array that we can use to simulate fish
 * population growth
 * 
 * @param {Array} initial the initial fish states
 * @returns an array representing the accounting of fish in the
 * population, initialized to
 */
function getStates (initial) {
  let states = [];

  for (let i = 0; i < 9; i++) {
    states[i] = 0;
  }

  initial.forEach(v => {
    states[v]++;
  });

  return states;
}

/**
 * Projects the fish population out to a specified number 
 * of days
 * 
 * @param {Array} fish an array of the initial fish states
 * @param {Number} days the number of days we wish to project
 * (defaults to 80 days)
 * @param {Boolean} debug true if we should include debug output
 * @return the total number of fish after the specified days
 */
module.exports = function projectFish (fish, days = 80, debug = false) {
  let state = getStates(fish);
  
  for (let i = 0; i < days; i++) {
    let births = state.shift();

    state[RECYCLE_DAYS] += births;
    state[BORN_DAYS] = births;

    if (debug) {
      console.log(`after ${i + 1} days ${Object.values(state).join()}`);
    }
  }

  return Object.values(state).reduce((s, v) => s + v, 0);
}