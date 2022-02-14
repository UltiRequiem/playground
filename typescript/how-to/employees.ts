type HelloPeople = `Hello ${"Alice" | "Bob" | "Charlie"}`;

const heyBob: HelloPeople = "Hello Charlie";

const heyAlice: HelloPeople = "Hello Alice";

const heyCharlie: HelloPeople = "Hello Charlie";

// const heyEliaz: HelloPeople = "Hello Eliaz";

console.log(heyBob, heyAlice, heyCharlie);
