const classifiers = {
  0: () => false,
  1: (str) => str.length === 2,
  2: () => false,
  3: () => false,
  4: (str) => str.length === 4,
  5: () => false,
  6: () => false,
  7: (str) => str.length === 3,
  8: (str) => str.length === 7,
  9: () => false
};

/**
 * Builds a predicate function for identifying a specified 
 * set of digits
 * 
 * @param {Array} digits the digits to flag
 * @returns a function that will returns a digit if it is 
 * one of the specified digits, -1 otherwise
 */
module.exports = function (digits = []) {
  return (str) => {
    for (let i = 0; i < digits.length; i++) {
      if (classifiers[digits[i]](str)) {
        return digits[i];
      }
    }

    return -1;
  }
}