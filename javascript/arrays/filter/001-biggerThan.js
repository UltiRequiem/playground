const { NUMBERS } = require('../data');

/**
 * @param {number[]} arr
 * @param {number} max
 */

const biggerThan = (arr, max) => arr.filter((num) => num > max);

console.log(biggerThan(NUMBERS, 70));
