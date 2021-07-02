function factorialize(num) {
  if (num < 0) {
    return undefined;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(4));
