function chars<S extends string>(text: S): GetChars<S>;
function chars(text: string): string[] {
  return [...new Set(text.split("").filter((c) => c !== " "))];
}

type GetChars<S extends string, A extends string[] = []> = S extends
  `${infer Letter}${infer Rest}` ? Letter extends A[number] ? GetChars<Rest, A>
: GetChars<Rest, [...A, Letter]>
  : A;

const helloChars = chars("hello");

// This will not work
/* if (helloChars[2] === "h") {
  console.log("first char is h");
} */

// Neither this
// console.log(helloChars[5]);
// NICEEEE

console.log(helloChars);
