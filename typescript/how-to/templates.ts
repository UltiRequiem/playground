type HeyNumber = `Hello ${number}`;

const heyNumber: HeyNumber = `Hello ${123}`;

const heyNumber2: HeyNumber = `Hello ${"23"}`;

const heyNumber3: HeyNumber = `Hello ${"hello" as unknown as number}`;

const heyNumber4: HeyNumber = `Hello ${123.123}`;

// const heyNumber5: HeyNumber = `Hello World ${123.123}`;

console.log(heyNumber, heyNumber2, heyNumber3, heyNumber4);
