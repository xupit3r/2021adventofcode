#!/usr/local/bin/node

const readData = require('./util/readData');

readData('day1a', (err, depths) => {
  if (err) {
    return console.error(err);
  }

  let increases = 0;
  depths.forEach((val, idx, arr) => {
    if (idx > 0 && +val > +arr[idx - 1]) {
      increases++;
    }
  });

  console.log(`depth increased ${increases} times`);
});