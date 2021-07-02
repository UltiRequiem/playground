function factorialize(num) {
  if (num < 0) {
    return undefined;
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    // eslint-disable-next-line no-param-reassign
    num *= i;
  }

  return num;
}

console.log(factorialize(4));
