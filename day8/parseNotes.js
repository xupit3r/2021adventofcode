/**
 * Given an input string representing the notes file, this
 * function will parse said string and return an object
 * 
 * @param {Array} notes an array of note lines
 * @returns an object with the following properties
 * 
 * 
 *   {
 *     observations: <an array of observations from the notes file>,
 *     output: <an array of output values from the notes file> 
 *   }
 */
module.exports = function parseNotes (notes = []) {
  return notes.map(row => {
    let [ observations, output ] = row.split('|');

    return {
      observations: observations.trim().split(/\s/),
      output: output.trim().split(/\s/)
  
    };
  })
}