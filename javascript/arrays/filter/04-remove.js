const { NUMBERS } = require('../data');

const delItem = (arr, toDel) => arr.filter((item) => !arr.includes(toDel));

const no50 = delItem(NUMBERS, 50);

console.log(no50)
