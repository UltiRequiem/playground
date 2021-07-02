const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];

console.log(sum(...numbers));

// Old way
// console.log(sum.apply(null, numbers));
