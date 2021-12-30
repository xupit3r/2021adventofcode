#!/usr/local/bin/node

const readData = require('./util/readData');
const parseCrabs = require('./day7/parseCrabs');
const minimizeFuel = require('./day7/minimizeFuel');

readData('day7', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let crabs = parseCrabs(data);
  let fuelCosts = minimizeFuel(crabs, true);
  
  console.log(`minimum fuel costs are ${fuelCosts}`);
});