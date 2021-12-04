#!/usr/local/bin/node

const getBitCounts = require('./day3/getBitCounts');
const readData = require('./util/readData');

readData('day3', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let gamma = [];
  let episilon = [];

  getBitCounts(data).forEach(counts => {
    if (counts[0] > counts[1]) {
      gamma.push(0);
      episilon.push(1);
    } else {
      gamma.push(1);
      episilon.push(0);
    }
  });

  gamma = parseInt(gamma.join(''), 2);
  episilon = parseInt(episilon.join(''), 2);

  console.log(`gamma is ${gamma}`);
  console.log(`episilon is ${episilon}`);
  console.log(`product is ${gamma * episilon}`);
});