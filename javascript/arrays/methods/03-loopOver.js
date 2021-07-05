const { FRUITS } = require('../data');

/** @param {Array} arr */
const printItems = (arr) => {
  arr.forEach((elem, index) => console.log(elem, index));
};

printItems(FRUITS);
