const fs = require('fs');

/**
 * Reads a desired data file.
 * 
 * @param {String} dataFile name of the data file to load
 * @param {Function} done callback function, first parameter 
 * will be an error or falsy for no error. the second will be 
 * an array of data from the specified data file
 */
module.exports = function readData (dataFile, done) {
  let path = `./data/${dataFile}`;

  fs.readFile(path, 'utf-8', (err, str) => {
    if (err) {
      return done(err);
    }

    done(err, str.split('\n'));
  });
}