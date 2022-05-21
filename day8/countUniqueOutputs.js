

/**
 * Given a set of parsed notes, this function will identify and 
 * count the unique
 * @param {Array} notes an array of parsed notes 
 * @param {Function} predicate simple predicate to determine 
 * if we care about a certain value or not
 */
module.exports = function countUniqueOutputs (notes, predicate = () => {}) {
  return notes.map(({ output }) => {
    return output.filter(str => predicate(str) > -1).length;
  }).reduce((count, n) => count + n, 0);
}