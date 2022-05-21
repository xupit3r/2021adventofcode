#!/usr/local/bin/node

const readData = require('./util/readData');
const parseNotes = require('./day8/parseNotes');
const isDigit = require('./day8/isDigit');
const countUniqueOutputs = require('./day8/countUniqueOutputs');

readData('day8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let notes = parseNotes(data);

  console.log(countUniqueOutputs(notes, isDigit([1, 4, 7, 8])));
});