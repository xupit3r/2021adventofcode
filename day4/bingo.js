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
      boards[board] = {};
    }

    if (line.trim().length > 0) {
      let values = line.trim().split(/\s+/);
      values.forEach((value, col) => {
        boards[board][value] = {
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
    run () {
      do {
        this.update();
        this.winner = this.check();
      } while (!this.winner);

      return this.winner;
    },
    update () {
      this.draw = this.draws[this.drawIdx++];
      this.boards.forEach(board => {
        if (board[this.draw]) {
          board[this.draw].marked = true;
        }
      });
    },
    check () {
      let winner = false;

      for (let i = 0; i < this.boards.length && !winner; i++) {
        let board = this.boards[i];
        let marked = Object.values(board).filter(value => value.marked);
        
        let rows = [];
        let cols = [];
        for (let j = 0; j < marked.length && !winner; j++) {
          let markedVal = marked[j];

          if (typeof rows[markedVal.row] === 'undefined') {
            rows[markedVal.row] = [];
          }

          if (typeof cols[markedVal.col] === 'undefined') {
            cols[markedVal.col] = [];
          }

          rows[markedVal.row].push(markedVal.value);
          cols[markedVal.col].push(markedVal.value);

          if (rows[markedVal.row].length === bingoLength ||
              cols[markedVal.col].length === bingoLength) {
            winner = {
              sum: Object.values(board).filter(value => !value.marked)
                                       .map(v => v.value)
                                       .reduce((s, v) => s += v),
              draw: this.draw,

            };
          }
        }
      }

      return winner;
    }
  };
}