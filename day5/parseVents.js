/**
 * Parses the vents data into a useable format.
 * 
 * @param {Array} data an array of vent data to parse into a 
 * useful format
 * @param {String} operator a string representing the operator to 
 * split the line on (defaults to "->")
 */
module.exports = function parseVents (data, operator = '->') {
  return data.map(line => {
    let [start, end] = line.split(operator);

    return {
      start: start.trim().split(',').map(n => +n),
      end: end.trim().split(',').map(n => +n)
    };
  });
}