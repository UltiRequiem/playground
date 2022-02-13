type ABC = "a" | "b" | "c";

type StartsWithABC<S extends string> = S extends `${ABC}${string}`
  ? (S extends `${infer Letter}${string}` ? Letter : never)
  : false;

type Hey = StartsWithABC<"hey">;
type A = StartsWithABC<"abc">;
