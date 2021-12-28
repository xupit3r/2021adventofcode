#!/usr/local/bin/node

const readData = require('./util/readData');
const parseVents = require('./day5/parseVents');
const createDiagram = require('./day5/createDiagram');
const countPoints = require('./day5/countPoints');
const drawDiagram = require('./day5/drawDiagram');

readData('day5', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let vents = parseVents(data);
  let diagram = createDiagram(vents);
  let points = countPoints(diagram);

  drawDiagram(diagram);

  console.log(`${points} points have 2 or more intersections`);
});