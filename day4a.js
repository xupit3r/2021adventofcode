#!/usr/local/bin/node

const readData = require('./util/readData');
const bingo = require('./day4/bingo');

readData('day4', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let game = bingo(data);
  let winner = game.run();

  console.log(winner.sum, winner.draw, winner.sum * winner.draw);
});