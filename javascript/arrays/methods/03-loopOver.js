const { FRUITS } = require('../data');

const printItems = (arr) => {
  arr.forEach((elem, index) => console.log(elem, index));
};

printItems(FRUITS);
