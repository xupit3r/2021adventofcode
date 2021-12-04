#!/usr/local/bin/node

const readData = require('./util/readData');

readData('day3', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let gamma = [];
  let episilon = [];

  data.reduce((positions, number) => {
    number.trim().split('').forEach((bit, i) => {
      if (typeof positions[i] === 'undefined') {
        positions[i] = [];
      }

      positions[i].push(bit);
      return positions;
    });

    return positions;
  }, []).map(position => {
    return position.reduce((counts, bit) => {
      return counts[bit]++, counts;
    }, [0, 0]);
  }).forEach(counts => {
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