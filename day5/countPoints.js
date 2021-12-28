/**
 * Counts points that meet the intersection criteria.
 * 
 * @param {Array} diagram a diagram for which we want to count the number 
 * of points that have more than a specified number of intersections
 * @param {Number} intersections the minimum number of intersections (inclusive) 
 * that are expected for a point to count (defaults to 2)
 * @returns the number of points that have the minimum specified intersectins
 */
module.exports = function countPoints (diagram, intersections = 2) {
  return diagram.flat().reduce((count, v) => {
    if (v >= intersections) {
      count++;
    }

    return count;
  }, 0); 
}