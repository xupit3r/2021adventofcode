/**
 * Parses the fish input data into a usable format.
 * 
 * @param {Array} data an array of data read in from the file
 * @returns an array of fish states, representating the starting 
 * state of the fish
 */
module.exports = function parseFish (data) {
  return data[0].split(',').map(v => +v);
}