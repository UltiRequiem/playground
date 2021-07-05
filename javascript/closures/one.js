// :: int -> int -> int
const incrementBy = (n) =>
  // :: int -> int
  function increment(x) {
    return n + x;
  };

const main = () => {
  const incrementByOne = incrementBy(1);
  // => int -> int
  const eleven = incrementByOne(10);
  console.log(eleven);
  // => 11
};
main();
