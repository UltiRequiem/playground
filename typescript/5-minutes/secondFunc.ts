function wrapInArray<T>(toWrap: T) {
  return Array.isArray(toWrap) ? toWrap : [toWrap];
}

console.log(wrapInArray("Hello!"));

console.log(wrapInArray(["1", "2"]));

console.log(wrapInArray(123));

console.log(wrapInArray(BigInt(123)));
