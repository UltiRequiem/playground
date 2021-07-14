const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const getMode = (arr) => arr
    .sort(
      (a, b) =>
        arr.reduce((acu, cur) => (cur === a ? (acu += 1) : cur)) -
        arr.reduce((acu, cur) => (cur === b ? (acu += 1) : cur))
    )
    .pop();

const mode = (arr) => {
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

console.log(getMode(NUMBERS)); // 5
