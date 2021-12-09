/**
 * Builds a Bingo game
 * 
 * @param {Array}  data        data read from the file
 * @param {Number} bingoLength base dimension of the board (default = 5)
 * @returns a Bingo game that can be played out
 */
module.exports = function bingo (data, bingoLength = 5) {
  let draws = data[0].split(',').map(v => +v);

  let boards = [];
  let board = 0;
  let row = 0;
  data.slice(2).forEach((line) => {
    if (typeof boards[board] === 'undefined') {
      boards[board] = {
        winner: false,
        values: {}
      };
    }

    if (line.trim().length > 0) {
      let values = line.trim().split(/\s+/);
      values.forEach((value, col) => {
        boards[board].values[value] = {
          value: +value,
          marked: false,
          col: col,
          row: row
        }
      });

      row++;
    } else {
      board++;
      row = 0;
    }
  });

  return {
    drawIdx: 0,
    draw: 0,
    draws: draws,
    boards: boards,
    winner: false,
    winners: [],
    run (last = false) {
      do {
        this.update();
        this.check(true);
      } while (this.drawIdx < this.draws.length);

      return (last
        ? this.winners[this.winners.length - 1]
        : this.winners[0]
      );
    },
    isAll () {
      return Object.keys(this.winners.reduce((h, v) => {
        h[v.board] = true;
        return h;
      }, {})).length === this.boards.length;
    },
    update () {
      this.draw = this.draws[this.drawIdx++];
      this.boards.forEach(board => {
        if (board.values[this.draw]) {
          board.values[this.draw].marked = true;
        }
      });
    },
    check () {
      for (let i = 0; i < this.boards.length; i++) {
        let board = this.boards[i];
        let marked = Object.values(board.values)
                           .filter(value => value.marked);
        
        let rows = [];
        let cols = [];
        for (let j = 0; j < marked.length; j++) {
          let markedVal = marked[j];
          let row = markedVal.row;
          let col = markedVal.col;

          if (typeof rows[row] === 'undefined') {
            rows[row] = [];
          }

          if (typeof cols[col] === 'undefined') {
            cols[col] = [];
          }

          rows[row].push(markedVal.value);
          cols[col].push(markedVal.value);

          if (!this.boards[i].winner &&
              (rows[row].length === bingoLength ||
               cols[col].length === bingoLength)) {
            this.boards[i].winner = true;
            this.winners.push({
              board: i,
              sum: Object.values(board.values)
                          .filter(value => !value.marked)
                          .map(v => v.value)
                          .reduce((s, v) => s + v, 0),
              draw: this.draw,

            });
          }
        }
      }
    }
  };
}