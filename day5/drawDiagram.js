/**
 * Draws a diagram to the console.
 * 
 * @param {Array} diagram a diagram to draw
 */
module.exports = function drawDiagram (diagram) {
  for (let i = 0; i < diagram.length; i++) {
    let output = '';
    let row = diagram[i] || [];

    for (let j = 0; j < row.length; j++) {
      if (row[j]) {
        output += row[j];
      } else {
        output += '.'
      }
    }

    console.log(output);
  }
}