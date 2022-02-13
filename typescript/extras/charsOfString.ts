function chars<S extends string>(text: S): GetChars<S>[];
function chars(text: string): string[] {
  return [...new Set(text.split("").filter((c) => c !== " "))];
}

type GetChars<S extends string> = S extends `${infer Letter}${infer Rest}`
  ? Letter | GetChars<Rest>
  : never;

chars("hello");
