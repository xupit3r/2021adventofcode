#!/usr/local/bin/node

const readData = require('./util/readData');
const parseCrabs = require('./day7/parseCrabs');
const minimizeFuel = require('./day7/minimizeFuel');
const getArithmeticCost = require('./day7/getArithmeticCost');

readData('day7', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let crabs = parseCrabs(data);
  let fuelCosts = minimizeFuel(crabs, getArithmeticCost);
  
  console.log(`minimum fuel costs are ${fuelCosts}`);
});