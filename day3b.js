#!/usr/local/bin/node

const readData = require('./util/readData');
const getBitCounts = require('./day3/getBitCounts');

readData('day3', (err, data) => {
  if (err) {
    return console.error(err);
  }


  let oxyNumbers = data
  let co2Numbers = data;
  let mostCommonOxy = getBitCounts(oxyNumbers).map(v => v[0] > v[1] ? 0 : 1);
  let mostCommonCo2 = getBitCounts(co2Numbers).map(v => v[0] <= v[1] ? 0 : 1);

  for (let i = 0; i < data[0].length; i++) {
    if (oxyNumbers.length > 1) {
      oxyNumbers = oxyNumbers.filter(num => +num[i] === mostCommonOxy[i]);
    }

    if (co2Numbers.length > 1) {
      co2Numbers = co2Numbers.filter(num => +num[i] === mostCommonCo2[i]);
    }

    mostCommonOxy = getBitCounts(oxyNumbers).map(v => v[0] > v[1] ? 0 : 1);
    mostCommonCo2 = getBitCounts(co2Numbers).map(v => v[0] <= v[1] ? 0 : 1);
  }

  let oxygen = parseInt(oxyNumbers[0], 2);
  let co2 = parseInt(co2Numbers[0], 2);

  console.log(`oxygen value is ${oxygen}`);
  console.log(`co2 value is ${co2}`);
  console.log(`life support rating is ${oxygen * co2}`);
});