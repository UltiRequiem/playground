const { NUMBERS } = require('../data');

/** @param {Array} arr */
const doubleNumbers = (arr) => arr.map((n) => n * 2);

console.log(doubleNumbers(NUMBERS));
