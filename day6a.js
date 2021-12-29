#!/usr/local/bin/node

const readData = require('./util/readData');
const parseFish = require('./day6/parseFish');
const projectFish = require('./day6/projectFish');

const [ days ] = process.argv.slice(2);

readData('day6', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let fish = parseFish(data);
  let projectedState = projectFish(fish, +days);

  console.log(`total fish after ${days} days is ${projectedState.length}`)
});