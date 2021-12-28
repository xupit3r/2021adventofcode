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
 * Given two numbers, this will return the next in the sequence
 * 
 * @param {Number} start   start number
 * @param {Number} end     end number
 * @param {Number} current current number
 * @returns the next number to use
 */
function next (start, end, current) {
  if (start === end) {
    return start;
  } else if (start > end) {
    return current - 1;
  } if (start < end) {
    return current + 1;
  }
}

/**
 * Determines if we have more stuff to fill in
 * 
 * @param {Number} start   start number
 * @param {Number} end     end number
 * @param {Number} current current number
 * @returns true if there is more to do, false otherwise
 */
function more (start, end, current) {
  if (start === end) {
    return false;
  } else if (start > end) {
    return current >= end;
  } if (start < end) {
    return current <= end;
  }
}

/**
 * Draws (creates) a digram of vents.
 * 
 * @param {Array} vents array of vent lines, that should be used 
 * to create the diagram of vents
 */
module.exports = function createDiagram (vents, considerAll = false) {
  let max = getMax(vents);
  let diagram = getEmptyMatrix(max.x, max.y);

  vents.forEach(vent => {
    let [x1, y1] = vent.start;
    let [x2, y2] = vent.end;

    if (considerAll || x1 === x2 || y1 === y2) {
      let nextX = x1;
      let nextY = y1;
  
      while (more(x1, x2, nextX) || 
             more(y1, y2, nextY)) {
  
        diagram[nextY][nextX]++;
  
        nextX = next(x1, x2, nextX);
        nextY = next(y1, y2, nextY);
      }
    }
  });

  return diagram;
}