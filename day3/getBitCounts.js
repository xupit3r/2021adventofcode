/**
 * Get counts of 0's and 1's for each position.
 * 
 * @param {Array} data an array of binary strings
 * @returns an array the length of the supplied binary strings, 
 * containing a tuple for each array position. the first number 
 * represents the count of 0's for that position and the second 
 * count represents the count of 1's for that position.
 */
module.exports = function getBitCounts (data) {
  return data.reduce((positions, number) => {
    number.trim().split('').forEach((bit, i) => {
      if (typeof positions[i] === 'undefined') {
        positions[i] = [];
      }

      positions[i].push(bit);
      return positions;
    });

    return positions;
  }, []).map(position => {
    return position.reduce((counts, bit) => {
      return counts[bit]++, counts;
    }, [0, 0]);
  }); 
}