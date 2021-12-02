/**
 * Builds a set of standardized instructions.
 *  
 * @param {String} data data from the input file
 * @returns an array of instructions, each instruction will 
 * be of the form:
 * 
 *  {
 *    direction: <"forward", "down", "up">,
 *    distance: <the distance to travel>
 *  }
 */
module.exports = function buildInstructions (data) {
  return data.map(val => {
    let [ direction, distance ] = val.split(' ');

    return {
      direction: direction,
      distance: +distance
    };
  })
}