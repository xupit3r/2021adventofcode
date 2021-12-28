/**
 * Determine the maximum value for both axes
 * 
 * @param {Array} vents an array of vents for which we want to calculate
 * the max x/y values
 * @returns an Object with properties "x" and "y" representing the max 
 * values for each axis
 */
function getMax (vents) {
  return vents.reduce((vals, vent) => {
    let [x1, y1] = vent.start;
    let [x2, y2] = vent.end;

    vals.x = Math.max(vals.x, x1, x2);
    vals.y = Math.max(vals.y, y1, y2);

    return vals;
  }, {
    x: 0,
    y: 0
  });
}

/**
 * Returns a maxtrix (y-major) to be used with the vent 
 * diagram
 * 
 * @param {Number} x the maxmium x value for the diagram
 * @param {Number} y the maximum y value for the daigram
 * @returns a matrix with the specified dimensions
 */
function getEmptyMatrix (x, y) {
  let diagram = [];
  for (let i = 0; i <= y; i++) {
    diagram[i] = [];

    for (let j = 0; j <= x; j++) {
      diagram[i][j] = 0;
    }
  }

  return diagram;
}

/**
 * Draws (creates) a digram of vents.
 * 
 * @param {Array} vents array of vent lines, that should be used 
 * to create the diagram of vents
 */
module.exports = function createDiagram (vents) {
  let max = getMax(vents);
  let diagram = getEmptyMatrix(max.x, max.y);

  vents.forEach(vent => {
    let [x1, y1] = vent.start;
    let [x2, y2] = vent.end;

    if (x1 === x2) {
      let start = Math.min(y1, y2);
      let distance = Math.max(y1, y2) - Math.min(y1, y2);

      for (let i = 0; i <= distance; i++) {
        diagram[start + i][x1]++;
      }
    } else if (y1 === y2) {
      let start  = Math.min(x1, x2);
      let distance = Math.max(x1, x2) - Math.min(x1, x2);

      for (let i = 0; i <= distance; i++) {
        diagram[y1][start + i]++;
      }
    }
  });

  return diagram;
}