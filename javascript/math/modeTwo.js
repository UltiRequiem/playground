const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const getMode = (arr) => {
  let [maxFreq, result] = [-1, -1];

  arr
    .reduce((acu, cur) => {
      acu.set(cur, (acu.has(cur) ? acu.get(cur) : 0) + 1);
      return acu;
    }, new Map())
    .forEach((value, key) => {
      if (value > maxFreq) {
        maxFreq = value;
        result = key;
      }
    });

  return result;
};

console.log(getMode(NUMBERS));
