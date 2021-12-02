#!/usr/local/bin/node

const readData = require('./util/readData');

readData('day2', (err, instructions) => {
  if (err) {
    return console.error(err);
  }

  let position = instructions.map(val => {
    let [ direction, distance ] = val.split(' ');

    return {
      direction: direction,
      distance: +distance
    };
  }).reduce((coords, instruction) => {
    if (instruction.direction == 'down') {
      coords.depth += instruction.distance;
    } else if (instruction.direction === 'up') {
      coords.depth -= instruction.distance;
    } else {
      coords.horizontal += instruction.distance;
    }

    return coords;
  }, {
    horizontal: 0,
    depth: 0
  });

  console.log(`final position is horizontal: ${position.horizontal} depth: ${position.depth}`);
  console.log(`product = ${position.horizontal * position.depth}`);
});