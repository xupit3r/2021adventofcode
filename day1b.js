#!/usr/local/bin/node

const readData = require('./util/readData');

readData('day1a', (err, depths) => {
  if (err) {
    return console.error(err);
  }

  let increases = 0;
  depths.map((val, idx, arr) => {
    return [
      +arr[idx - 2],
      +arr[idx - 1],
      +val
    ].reduce((p, c) => p + c);
  }).forEach((val, idx, arr) => {
    if (idx > 1 && val > arr[idx -1]) {
      increases++;
    }
  });

  console.log(`using a moving window the depth increased ${increases} times`);
});