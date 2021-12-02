#!/usr/local/bin/node

const readData = require('./util/readData');
const buildInstructions = require('./day2/buildInstructions');

readData('day2', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let position = buildInstructions(data).reduce((coords, instruction) => {
    if (instruction.direction == 'down') {
      coords.aim += instruction.distance;
    } else if (instruction.direction === 'up') {
      coords.aim -= instruction.distance;
    } else {
      coords.horizontal += instruction.distance;
      coords.depth += coords.aim * instruction.distance;
    }

    return coords;
  }, {
    horizontal: 0,
    depth: 0,
    aim: 0
  });

  console.log(`final position is horizontal: ${position.horizontal} depth: ${position.depth}`);
  console.log(`product = ${position.horizontal * position.depth}`);
});